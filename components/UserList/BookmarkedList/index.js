import { styled } from "styled-components";
import MovieItem from "../MovieItem";

export default function BookmarkedList({ userInformation, startFetchLoading }) {
  const bookmarkedMovies = userInformation.filter((item) => item?.isBookmarked);

  return (
    <>
      {bookmarkedMovies ? (
        <List>
          {bookmarkedMovies.map((movie) => (
            <MovieItem
              id={movie.id}
              key={movie.id}
              date={`hinzugefügt am ${movie.bookmarkDate}`}
              content={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="32"
                  viewBox="0 -960 960 960"
                  width="32"
                >
                  <path d="m304-82-56-57 343-343-343-343 56-57 400 400L304-82Z" />
                </svg>
              }
              startFetchLoading={startFetchLoading}
            />
          ))}
        </List>
      ) : null}
      {bookmarkedMovies.length === 0 ? (
        <StyledFigure>
          <StyledSvg
            xmlns="http://www.w3.org/2000/svg"
            height="48"
            viewBox="0 -960 960 960"
            width="48"
          >
            <path d="M626-533q22.5 0 38.25-15.75T680-587q0-22.5-15.75-38.25T626-641q-22.5 0-38.25 15.75T572-587q0 22.5 15.75 38.25T626-533Zm-292 0q22.5 0 38.25-15.75T388-587q0-22.5-15.75-38.25T334-641q-22.5 0-38.25 15.75T280-587q0 22.5 15.75 38.25T334-533Zm146.174 116Q413-417 358.5-379.5T278-280h53q22-42 62.173-65t87.5-23Q528-368 567.5-344.5T630-280h52q-25-63-79.826-100-54.826-37-122-37ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-400Zm0 340q142.375 0 241.188-98.812Q820-337.625 820-480t-98.812-241.188Q622.375-820 480-820t-241.188 98.812Q140-622.375 140-480t98.812 241.188Q337.625-140 480-140Z" />
          </StyledSvg>
          <Caption>Keinen Film gefunden</Caption>
          <StyledErrorParagraph>
            klicke auf Film hinzufügen um dir Filme abzuspeichern
          </StyledErrorParagraph>
        </StyledFigure>
      ) : null}
    </>
  );
}

const List = styled.ul`
  margin-top: var(--margin-medium);
`;

const StyledFigure = styled.figure`
  opacity: 0.7;
  width: 100%;
  height: 45vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-top: var(--margin-medium);
`;

const StyledSvg = styled.svg`
  fill: var(--text-color-light-heading);
`;

const Caption = styled.figcaption`
  color: var(--text-color-light-heading);

  font-size: var(--header-h2);
  margin-top: var(--margin-small);
`;

const StyledErrorParagraph = styled.p`
  color: var(--text-color-light-content);

  font-size: var(--big-text);
  margin-top: var(--margin-x-small);
`;
