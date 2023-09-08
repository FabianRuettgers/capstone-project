import Link from "next/link";
import styled from "styled-components";

export default function RankingItem({ content, caption, rating, id }) {
  return (
    <StyledFigure>
      <Caption caption={caption}>{caption}</Caption>
      <StyledLink href={`/movie/${id}`}>
        <Content>{content}</Content>
        <Rating>{rating}</Rating>
      </StyledLink>
    </StyledFigure>
  );
}

const StyledFigure = styled.figure`
  display: flex;
  align-items: center;
  color: var(--text-color-light-content);
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
  box-shadow: 0 0 8px var(--shadow-color-dark);
  border-radius: var(--border-radius-x-small);
  height: 2rem;
  width: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledLink = styled(Link)`
  box-shadow: 0 0 8px var(--shadow-color-dark);
  border-radius: var(--border-radius-x-small);
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 88% 12%;
  align-items: center;
  margin-left: var(--margin-x-small);
  padding-left: var(--padding-x-small);
`;

const Content = styled.p`
  color: var(--text-color-light-content);
  font-size: var(--big-text);
  overflow: hidden;
  text-overflow: ellipsis;
  padding-bottom: var(--padding-x-small);
  padding-top: var(--padding-x-small);
  padding-right: var(--padding-x-small);
`;
const Rating = styled.p`
  color: var(--text-color-light-content);
  background-color: var(--background-color-highlight-content);
  display: grid;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  border-top-right-radius: var(--border-radius-x-small);
  border-bottom-right-radius: var(--border-radius-x-small);
`;
