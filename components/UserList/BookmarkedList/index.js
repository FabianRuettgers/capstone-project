import { styled } from "styled-components";
import MovieItem from "../MovieItem";

export default function BookmarkedList({ userInformation }) {
  const bookmarkedMovies = userInformation.filter((item) => item.isBookmarked);
  console.log(bookmarkedMovies);
  return (
    <>
      {bookmarkedMovies ? (
        <List>
          {bookmarkedMovies.map((movie) => (
            <MovieItem id={movie.id} key={movie.id} date={""} />
          ))}
        </List>
      ) : null}
    </>
  );
}

const List = styled.ul`
  margin-top: var(--margin-medium);
`;
