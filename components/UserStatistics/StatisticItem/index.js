import { styled } from "styled-components";

export default function StatisticItem({ content, caption }) {
  return (
    <StyledFigure>
      <p>{content}</p>
      <figcaption>{caption}</figcaption>
    </StyledFigure>
  );
}

const StyledFigure = styled.figure`
  border: 2px solid red;
  color: white;
`;
