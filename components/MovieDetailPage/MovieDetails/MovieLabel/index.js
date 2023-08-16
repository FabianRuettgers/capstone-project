import { styled } from "styled-components";

export default function MovieLabel({ heading, contentCheck, content }) {
  return (
    <StyledFigure>
      <Heading>{heading}</Heading>
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
`;

const Heading = styled.figcaption`
  color: var(--text-color-dark-heading);
  font-size: small;
  font-weight: 300;
`;

const Content = styled.p`
  color: var(--text-color-dark-content);
  font-size: medium;
  font-weight: 600;

  margin-top: var(--margin-x-small);
`;
