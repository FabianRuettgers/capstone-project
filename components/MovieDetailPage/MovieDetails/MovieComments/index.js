import DeleteCommentButton from "@/components/Buttons/DeleteCommentButton";
import EditCommentButton from "@/components/Buttons/EditCommentButton";
import ExitEditCommentButton from "@/components/Buttons/ExitEditCommentButton";
import SaveCommentButton from "@/components/Buttons/SaveCommentButton";
import { useState } from "react";
import { keyframes, styled } from "styled-components";

export default function MovieComments({
  id,
  userInformation,
  currentAction,
  MovieComments,
  handleCommentButtonClick,
  handleEditButtonClick,
  handleInputChange,
  handleEditDone,
  handleEditGoBack,
  handleCommentDeleteButtonClick,
}) {
  const emptyInput =
    !currentAction.editingComment || !currentAction.editingComment.content;
  const foundUser = userInformation.find((user) => user.id === id);
  const userComments = foundUser ? foundUser.comments : null;
  const comments = MovieComments.results;
  const combinedComments = userComments
    ? [...userComments, ...comments]
    : comments;

  function deleteMode(commentId) {
    const itemToDelete =
      currentAction.userInput === "ACTION_DELETE_COMMENT" &&
      currentAction.editingComment &&
      currentAction.editingComment.id === commentId;
    return itemToDelete;
  }

  function editMode(commentId) {
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
      editMode(currentAction.editingComment.id) ? (
        <StyledExitButton
          onClick={() => handleEditButtonClick(currentAction.editingComment.id)}
        />
      ) : null}
      <ListHeading>Kommentare ({combinedComments.length})</ListHeading>
      <ButtonWrapper>
        <StyledButton onClick={handleCommentButtonClick}>
          neuer Kommentar
        </StyledButton>
      </ButtonWrapper>
      {combinedComments && combinedComments.length > 0 && (
        <List>
          {combinedComments.map((comment) => (
            <StyledListItem
              key={comment.id}
              deleteMode={deleteMode(comment.id)}
            >
              <EditCommentButton
                handleEditClick={() => handleEditButtonClick(comment.id)}
                handleBackClick={handleEditGoBack}
                editMode={editMode(comment.id)}
              />

              <SaveCommentButton
                onClick={() => handleEditDone(id)}
                disabled={emptyInput}
                editMode={editMode(comment.id)}
              />
              <DeleteCommentButton
                onClick={handleCommentDeleteButtonClick}
                editMode={editMode(comment.id)}
              />
              <Heading>{comment.author}</Heading>
              <Date>
                erstellt am {comment.created_at.slice(8, 10)}.
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
                    placeholder="Das Textfeld darf nicht leer sein"
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
                      {showAll ? "Weniger anzeigen" : "Mehr anzeigen"}
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
  width: 100vw;
  position: fixed;
  top: 0;
  background-color: black;
  opacity: 0.2;
  z-index: 9999;
`;

const EditSection = styled.section`
  display: grid;
  gap: 1rem;
`;

const ButtonWrapper = styled.div`
  margin-top: var(--margin-medium);
  margin-inline: var(--margin-medium);
`;

const StyledButton = styled.button`
  background-color: var(--background-color-highlight-button);
  color: var(--text-color-dark-button);
  box-shadow: 0 0 12px var(--shadow-color-dark);
  border-radius: var(--border-radius-medium);
  width: 100%;
  padding: var(--padding-small);
  font-size: var(--header-h3);
  &:active {
    transform: scale(0.85);
  }
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
  background-color: var(--background-color-light-content);
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
  color: var(--text-color-dark-heading);
  font-size: var(--header-h2);
`;

const Date = styled.p`
  color: var(--text-color-dark-heading);
  opacity: 0.7;
  font-size: var(--big-text);
`;

const Content = styled.p`
  color: var(--text-color-dark-content);
  margin-top: var(--margin-small);
  font-size: var(--big-text);
`;

const TextareaContent = styled.textarea`
  color: var(--text-color-dark-content);
  margin-top: var(--margin-small);
  font-size: var(--big-text);
  border: 1px solid var(--text-color-dark-content);
`;

const ToggleShowButton = styled.button`
  background: none;
  color: var(--text-color-light-heading);
  font-size: var(--big-text);
`;

const ErrorInput = styled.p`
  color: var(--text-color-light-content);
  opacity: 0.7;
`;
