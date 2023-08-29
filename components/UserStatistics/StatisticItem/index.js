import { styled } from "styled-components";

export default function StatisticItem({ content, caption }) {
  return (
    <StyledFigure>
      <Content>{content}</Content>
      <Caption>{caption}</Caption>
    </StyledFigure>
  );
}

const StyledFigure = styled.figure`
  background-color: var(--background-color-highlight-content);
  display: grid;
  align-items: end;
  color: var(--text-color-dark-content);
  padding: 1rem;
  border-radius: 1rem;
`;

const Content = styled.p`
  text-align: center;
  font-size: var(--big-text);
  margin-bottom: 0.5rem;
`;
const Caption = styled.figcaption`
  border-top: 1px solid black;
  padding-top: 0.5rem;
  font-size: var(--plain-text);
`;
