import { styled } from "styled-components";

export default function GenreItem({ content }) {
  return (
    <StyledFigure>
      <Content>{content}</Content>
    </StyledFigure>
  );
}

const StyledFigure = styled.div`
  background-color: var(--highlight-color);
  box-shadow: 0 0 8px var(--shadow-color-dark);

  text-align: center;
  padding: var(--padding-x-small);
  border-radius: var(--border-radius-medium);
  z-index: 10;
`;

const Content = styled.figcaption`
  color: var(--text-color-light-content);
  font-size: medium;
  font-weight: 400;
`;
