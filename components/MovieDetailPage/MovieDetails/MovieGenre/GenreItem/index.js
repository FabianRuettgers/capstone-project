import { styled } from "styled-components";

export default function GenreItem({ content }) {
  return (
    <StyledFigure>
      <Content>{content}</Content>
    </StyledFigure>
  );
}

const StyledFigure = styled.div`
  background-color: var(--background-color-highlight-content);
  text-align: center;
  padding: var(--padding-x-small);
  border-radius: var(--border-radius-medium);
`;

const Content = styled.figcaption`
  color: var(--text-color-light-content);
  font-size: var(--header-h3);
`;
