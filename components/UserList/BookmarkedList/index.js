import { styled } from "styled-components";
import MovieItem from "../MovieItem";

export default function BookmarkedList({ userInformation }) {
  const bookmarkedMovies = userInformation.filter((item) => item.isBookmarked);

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
            />
          ))}
        </List>
      ) : null}
    </>
  );
}

const List = styled.ul`
  margin-top: var(--margin-medium);
`;
