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
  color: var(--text-color-dark-content);
  box-shadow: 0 0 8px var(--shadow-color-dark);
  border-radius: var(--border-radius-small);
  display: grid;
  align-items: end;
  text-align: center;
  padding: var(--padding-x-small);
`;

const Content = styled.p`
  color: var(--text-color-dark-content);
  font-size: var(--big-text);
  overflow: hidden;
  text-overflow: ellipsis;
  margin-bottom: var(--margin-x-small);
`;
const Caption = styled.figcaption`
  color: var(--text-color-dark-content);
  font-size: var(--plain-text);
  border-top: 1px solid black;
`;
