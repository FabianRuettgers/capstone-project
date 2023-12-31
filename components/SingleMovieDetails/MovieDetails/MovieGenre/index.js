import styled from "styled-components";

export default function GenreItem({ movie }) {
  return (
    <StyledFigure>
      <StyledSvg
        xmlns="http://www.w3.org/2000/svg"
        height="24"
        viewBox="0 -960 960 960"
        width="24"
      >
        <path d="m260-260 300-140 140-300-300 140-140 300Zm220-180q-17 0-28.5-11.5T440-480q0-17 11.5-28.5T480-520q17 0 28.5 11.5T520-480q0 17-11.5 28.5T480-440Zm0 360q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" />
      </StyledSvg>
      <Heading>Genre</Heading>
      <Content>
        {movie.genres[0]?.name ? movie.genres[0].name : "unknown"}
      </Content>
    </StyledFigure>
  );
}

const StyledFigure = styled.div`
  background-color: var(--background-color-dark-content);
  box-shadow: 0 0 8px var(--shadow-color-dark);
  text-align: center;
  padding: var(--padding-x-small);
  border-radius: var(--border-radius-small);
`;

const Content = styled.p`
  color: var(--text-color-light-content);
  font-size: var(--header-h3);
  font-weight: 600;
`;

const Heading = styled.figcaption`
  color: var(--text-color-lighter-heading);
  font-size: var(--header-h3);
  padding-top: var(--margin-xx-small);
  padding-bottom: var(--margin-xx-small);
`;

const StyledSvg = styled.svg`
  fill: var(--text-color-light-content);
`;
