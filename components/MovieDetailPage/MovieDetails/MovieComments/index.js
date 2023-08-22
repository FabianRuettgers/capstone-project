import { useState } from "react";
import { styled } from "styled-components";

export default function MovieComments({ MovieComments }) {
  const comments = MovieComments.results;
  const [showAll, setShowAll] = useState(false);
  console.log(comments);
  const handleToggleShowAll = () => {
    setShowAll(!showAll);
  };

  return (
    <>
      {comments && comments.length > 0 && (
        <>
          <ListHeading>Kommentare</ListHeading>
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
                  {showAll ? comment.content : comment.content.slice(0, 150)}
                  {comment.content.length > 150 && !showAll && "..."}
                </Content>
                {comment.content.length > 150 && (
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
  margin-top: 2rem;
  margin-inline: 2rem;
  color: var(--text-color-light-heading);
`;

const List = styled.ul`
  margin-inline: 2rem;
  margin-top: 2rem;
`;

const StyledListItem = styled.li`
  margin-bottom: 1rem;
`;

const Heading = styled.h3`
  color: var(--text-color-light-heading);
`;

const Date = styled.p`
  color: var(--text-color-light-heading);
  opacity: 0.7;
`;

const Content = styled.p`
  color: var(--text-color-light-heading);
  margin-top: 1rem;
`;

const ToggleShowButton = styled.button`
  background: none;
  color: var(--text-color-light-heading);
`;
