import { styled } from "styled-components";

export default function RankingItem({ content, caption, rating }) {
  return (
    <StyledFigure>
      <Caption caption={caption}>{caption}</Caption>
      <Wrapper>
        <Content>{content}</Content>
        <Rating>{rating}</Rating>
      </Wrapper>
    </StyledFigure>
  );
}

const StyledFigure = styled.figure`
  display: flex;
  align-items: center;
  color: white;
`;

const Caption = styled.figcaption`
  background-color: ${({ caption }) => {
    if (caption === 1) {
      return "#ffd700";
    } else if (caption === 2) {
      return "#c0c0c0";
    } else if (caption === 3) {
      return "#CD7F32";
    } else {
      return "var(--background-color-dark-content)";
    }
  }};
  color: ${({ caption }) => {
    if (caption === 1 || caption === 2 || caption === 3) {
      return "var(--text-color-dark-content)";
    } else {
      return "var(--text-color-light-content)";
    }
  }};
  border-radius: 0.5rem;
  box-shadow: 0 0 8px var(--shadow-color-dark);
  height: 2rem;
  width: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 88% 12%;
  align-items: center;
  margin-left: 0.5rem;
  padding-left: 0.5rem;

  border: 2px solid red;
  border-radius: 0.5rem;
`;

const Content = styled.p`
  font-size: var(--big-text);
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
`;
const Rating = styled.p`
  display: grid;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: red;
`;
