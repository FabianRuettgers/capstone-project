import { useState } from "react";
import { styled } from "styled-components";

export default function MovieComments({
  MovieComments,
  handleCommentButtonClick,
  userInformation,
  id,
  startRating,
  startComment,
  startDelete,
  handleEditButtonClick,
  startEditComment,
  editingComment,
  handleInputChange,
  handleEditDone,
  handleEditGoBack,
  handleDeleteComment,
}) {
  const disableButton =
    startComment || startRating || startDelete || startEditComment;
  const disableEditButton = startComment || startRating || startDelete;
  const emptyInput = !editingComment || !editingComment.content;
  const foundUser = userInformation.find((user) => user.id === id);
  const userComments = foundUser ? foundUser.comments : null;
  const comments = MovieComments.results;
  const combinedComments = userComments
    ? [...userComments, ...comments]
    : comments;

  const [showAll, setShowAll] = useState(false);

  const handleToggleShowAll = () => {
    setShowAll(!showAll);
  };
  const characterLength = 300;
  return (
    <>
      <ListHeading>Kommentare</ListHeading>
      <ButtonWrapper>
        <StyledButton
          onClick={handleCommentButtonClick}
          disabled={disableButton}
        >
          neuer Kommentar
        </StyledButton>
      </ButtonWrapper>
      {combinedComments && combinedComments.length > 0 && (
        <List>
          {combinedComments.map((comment) => (
            <StyledListItem key={comment.id}>
              <StyledEditButton
                onClick={() => handleEditButtonClick(comment.id)}
                disabled={disableEditButton}
              >
                <Heading>{comment.author}</Heading>
                <Date>
                  erstellt am {comment.created_at.slice(8, 10)}.
                  {comment.created_at.slice(5, 7)}.
                  {comment.created_at.slice(0, 4)}
                </Date>
              </StyledEditButton>
              {startEditComment === true &&
              editingComment &&
              editingComment.id === comment.id ? (
                <EditSection>
                  <textarea
                    rows="3"
                    value={editingComment.content}
                    onChange={handleInputChange}
                  />
                  {emptyInput ? (
                    <ErrorInput>Das Textfeld darf nicht leer sein</ErrorInput>
                  ) : null}
                  <button
                    onClick={() => handleEditDone(id)}
                    disabled={emptyInput}
                  >
                    Save
                  </button>
                  <button onClick={handleEditGoBack}>go back</button>
                  <button onClick={() => handleDeleteComment(id, comment.id)}>
                    Delete
                  </button>
                </EditSection>
              ) : (
                <StyledEditButton
                  onClick={() => handleEditButtonClick(comment.id)}
                  disabled={disableEditButton}
                >
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
                </StyledEditButton>
              )}
            </StyledListItem>
          ))}
        </List>
      )}
    </>
  );
}

const EditSection = styled.section`
  display: grid;
  gap: 1rem;
`;

const StyledEditButton = styled.button`
  background-color: transparent;
  &:active {
    transform: scale(0.85);
  }
  text-align: left;
  display: grid;
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

const StyledListItem = styled.li`
  margin-bottom: var(--margin-small);
  border: 2px solid red;
`;

const Heading = styled.h3`
  color: var(--text-color-light-heading);
  font-size: var(--header-h2);
`;

const Date = styled.p`
  color: var(--text-color-light-heading);
  opacity: 0.7;
  font-size: var(--big-text);
`;

const Content = styled.p`
  color: var(--text-color-light-content);
  margin-top: var(--margin-small);
  font-size: var(--big-text);
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
