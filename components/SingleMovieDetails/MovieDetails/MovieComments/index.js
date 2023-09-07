import DeleteCommentButton from "@/components/Buttons/DeleteCommentButton";
import EditCommentButton from "@/components/Buttons/EditCommentButton";
import ExitCommentButton from "@/components/Buttons/ExitCommentButton";

import SaveCommentButton from "@/components/Buttons/SaveCommentButton";
import { PageNotFoundError } from "next/dist/shared/lib/utils";
import { useState } from "react";
import { keyframes, styled } from "styled-components";

export default function MovieComments({
  id,
  userInformation,
  currentAction,
  MovieComments,
  handleEditButtonClick,
  handleInputChange,
  handleEditDone,
  handleEditGoBack,
  handleCommentDeleteButtonClick,
}) {
  const emptyInput =
    !currentAction.editingComment || !currentAction.editingComment.content;
  const foundUser = userInformation.find((user) => user?.id === id);
  const userComments = foundUser ? foundUser.comments : null;
  const comments = MovieComments.results;
  const combinedComments = userComments
    ? [...userComments, ...comments]
    : comments;

  function userIsInDeleteMode(commentId) {
    const itemToDelete =
      currentAction.userInput === "ACTION_DELETE_COMMENT" &&
      currentAction.editingComment &&
      currentAction.editingComment.id === commentId;
    return itemToDelete;
  }

  function userIsInEditMode(commentId) {
    const itemToEdit =
      currentAction.userInput === "ACTION_COMMENT_EDIT" &&
      currentAction.editingComment &&
      currentAction.editingComment.id === commentId;
    return itemToEdit;
  }

  const [showAll, setShowAll] = useState(false);

  const handleToggleShowAll = () => {
    setShowAll(!showAll);
  };
  const characterLength = 300;
  return (
    <>
      {currentAction.editingComment &&
      userIsInEditMode(currentAction.editingComment.id) ? (
        <StyledExitButton
          onClick={() => handleEditButtonClick(currentAction.editingComment.id)}
        />
      ) : null}
      <ListHeading>Comments ({combinedComments.length})</ListHeading>
      {combinedComments && combinedComments.length > 0 && (
        <List>
          {combinedComments.map((comment) => (
            <StyledListItem
              key={comment.id}
              deleteMode={userIsInDeleteMode(comment.id)}
            >
              {userIsInEditMode(comment.id) ? (
                <>
                  <ExitCommentButton onClick={handleEditGoBack} />
                  <DeleteCommentButton
                    onClick={handleCommentDeleteButtonClick}
                  />
                  <SaveCommentButton
                    onClick={() => handleEditDone(id)}
                    disabled={emptyInput}
                  />
                </>
              ) : (
                <>
                  {foundUser?.comments?.some(
                    (commentary) => commentary.id === comment.id
                  ) ? (
                    <EditCommentButton
                      onClick={() => handleEditButtonClick(comment.id)}
                    />
                  ) : null}
                </>
              )}

              <Heading>{comment.author}</Heading>
              <Date>
                {comment.created_at.slice(8, 10)}.
                {comment.created_at.slice(5, 7)}.
                {comment.created_at.slice(0, 4)}
              </Date>
              {currentAction.userInput === "ACTION_COMMENT_EDIT" &&
              currentAction.editingComment &&
              currentAction.editingComment.id === comment.id ? (
                <EditSection>
                  <TextareaContent
                    rows="3"
                    value={currentAction.editingComment.content}
                    placeholder="The input can not be empty"
                    onChange={handleInputChange}
                  />
                </EditSection>
              ) : (
                <>
                  <Content>
                    {showAll
                      ? comment.content
                      : comment.content.slice(0, characterLength)}
                    {comment.content.length > characterLength &&
                      !showAll &&
                      "..."}
                  </Content>
                  {comment.content.length > characterLength && (
                    <ToggleShowButton onClick={handleToggleShowAll}>
                      {showAll ? "Show less" : "Show more"}
                    </ToggleShowButton>
                  )}
                </>
              )}
            </StyledListItem>
          ))}
        </List>
      )}
    </>
  );
}

const StyledExitButton = styled.button`
  height: 100vh;
  width: 150vw;
  position: fixed;
  top: 0;
  left: -50%;
  background-color: black;
  opacity: 0.2;
  z-index: 9999;
`;

const EditSection = styled.section`
  display: grid;
  gap: 1rem;
`;

const ListHeading = styled.h2`
  text-align: left;
  margin-top: var(--margin-medium);
  margin-inline: var(--margin-medium);
  color: var(--text-color-light-heading);
  font-size: var(--header-h2);
`;

const List = styled.ul`
  margin-inline: var(--margin-medium);
  margin-top: var(--margin-medium);
  display: grid;
`;

const spinAnimation = keyframes`
  0%, 100% { transform: rotate(0deg); }
  25% { transform: rotate(1deg); }
  50% { transform: rotate(0deg); }
  75% { transform: rotate(-1deg); }
`;

const StyledListItem = styled.li`
  margin-bottom: var(--margin-small);
  background-color: var(--background-color-dark-content);
  border: 3px solid
    ${(props) =>
      props.deleteMode
        ? "var(--primary-color)"
        : "var(--text-color-dark-content)"};
  position: relative;
  padding: 1rem;
  border-radius: 1rem;
  box-shadow: 0 0 12px var(--shadow-color-dark);
  animation: ${spinAnimation} ${(props) => (props.deleteMode ? "0.25s" : "0s")}
    infinite;
  z-index: 99999;
`;

const Heading = styled.h3`
  color: var(--text-color-light-heading);
  font-size: var(--header-h2);
`;

const Date = styled.p`
  color: var(--text-color-lighter-heading);
  font-size: var(--big-text);
`;

const Content = styled.p`
  color: var(--text-color-light-content);
  margin-top: var(--margin-small);
  font-size: var(--big-text);
  max-width: 414px;
`;

const TextareaContent = styled.textarea`
  color: var(--text-color-dark-content);
  margin-top: var(--margin-small);
  font-size: var(--big-text);
  border: 1px solid var(--text-color-dark-content);
`;

const ToggleShowButton = styled.button`
  background: none;
  color: var(--text-color-highlight-heading);
  font-size: var(--big-text);
`;

const ErrorInput = styled.p`
  color: var(--text-color-light-content);
  opacity: 0.7;
`;
