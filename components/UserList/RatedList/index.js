import { styled } from "styled-components";
import MovieItem from "../MovieItem";

export default function RatedList({ userInformation }) {
  const ratedMovies = userInformation.filter((item) => item.rating);
  const sortedMoviesHightoLow = ratedMovies.sort((a, b) => b.rating - a.rating);

  return (
    <>
      {ratedMovies ? (
        <List>
          {sortedMoviesHightoLow.map((movie) => (
            <MovieItem
              id={movie.id}
              key={movie.id}
              date={`bewertet am ${movie.ratingDate}`}
              content={
                <GridWrapper>
                  <P>{movie.rating}</P>
                </GridWrapper>
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

const GridWrapper = styled.div`
  background-color: var(--highlight-color);
  padding: 1rem;
  width: 100%;
  border-radius: 50%;
  display: flex;
  justify-content: center;
`;

const P = styled.p`
  color: var(--text-color-dark-heading);
  font-size: 1rem;
`;
