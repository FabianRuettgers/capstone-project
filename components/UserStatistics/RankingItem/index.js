import { styled } from "styled-components";

export default function RankingItem({ content, caption, rating }) {
  return (
    <StyledFigure>
      <figcaption>{caption}</figcaption>
      <p>{content}</p>
      <p>{rating}</p>
    </StyledFigure>
  );
}

const StyledFigure = styled.figure`
  display: flex;
  justify-content: space-between;
  border: 2px solid red;
  color: white;
`;
