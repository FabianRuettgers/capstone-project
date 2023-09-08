import styled from "styled-components";

export default function MovieRating({ movie }) {
  const movieRating = movie.vote_average.toFixed(1);

  return (
    <StyledFigure>
      <StyledSvg
        xmlns="http://www.w3.org/2000/svg"
        height="24"
        viewBox="0 -960 960 960"
        width="24"
      >
        <path d="m480-323 126 77-33-144 111-96-146-13-58-136v312ZM233-80l65-281L80-550l288-25 112-265 112 265 288 25-218 189 65 281-247-149L233-80Z" />
      </StyledSvg>
      <Heading>Rating</Heading>
      <Content>{`${movieRating} / 10`}</Content>
    </StyledFigure>
  );
}

const StyledFigure = styled.div`
  background-color: var(--background-color-dark-content);
  box-shadow: 0 0 8px var(--shadow-color-dark);
  text-align: center;
  padding: var(--padding-x-small);
  border-radius: 1rem;
`;

const Content = styled.p`
  color: var(--text-color-light-content);
  font-size: var(--header-h3);
  font-weight: 600;
`;

const Heading = styled.figcaption`
  color: var(--text-color-lighter-heading);
  font-size: var(--header-h3);
  padding-top: 0.25rem;
  padding-bottom: 0.25rem;
`;

const StyledSvg = styled.svg`
  fill: var(--text-color-light-content);
`;
