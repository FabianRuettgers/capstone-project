import { useState } from "react";
import { styled } from "styled-components";

export default function MovieComments({
  MovieComments,
  handleCommentButtonClick,
}) {
  const comments = MovieComments.results;
  const [showAll, setShowAll] = useState(false);
  console.log(comments);
  const handleToggleShowAll = () => {
    setShowAll(!showAll);
  };
  const characterLength = 300;
  return (
    <>
      <ListHeading>Kommentare</ListHeading>
      <button onClick={handleCommentButtonClick}>neuer Kommentar</button>
      {comments && comments.length > 0 && (
        <>
          <List>
            {comments.map((comment) => (
              <StyledListItem key={comment.id}>
                <Heading>{comment.author}</Heading>
                <Date>
                  erstellt am {comment.created_at.slice(8, 10)}.
                  {comment.created_at.slice(5, 7)}.
                  {comment.created_at.slice(0, 4)}
                </Date>
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
              </StyledListItem>
            ))}
          </List>
        </>
      )}
    </>
  );
}
const ListHeading = styled.h2`
  text-align: center;
  margin-top: var(--margin-medium);
  margin-inline: var(--margin-medium);
  color: var(--text-color-light-heading);
  font-size: var(--header-h2);
`;

const List = styled.ul`
  margin-inline: var(--margin-medium);
  margin-top: var(--margin-medium);
`;

const StyledListItem = styled.li`
  margin-bottom: var(--margin-small);
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
