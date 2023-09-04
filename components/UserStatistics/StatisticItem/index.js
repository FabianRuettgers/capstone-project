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
  background-color: var(--background-color-dark-content);
  color: var(--text-color-light-content);
  box-shadow: 0 0 6px var(--shadow-color-dark);
  border-radius: var(--border-radius-small);
  display: grid;
  align-items: end;
  text-align: center;
  padding: var(--padding-x-small);
`;

const Content = styled.p`
  color: var(--text-color-light-content);
  font-size: var(--big-text);
  overflow: hidden;
  text-overflow: ellipsis;
  margin-bottom: var(--margin-x-small);
`;
const Caption = styled.figcaption`
  color: var(--text-color-lighter-content);
  font-size: var(--plain-text);
  border-top: 1px solid var(--text-color-highlight-content);
  padding-top: 0.5rem;
`;
