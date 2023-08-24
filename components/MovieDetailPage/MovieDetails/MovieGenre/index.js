import GenreItem from "./GenreItem";
import { styled } from "styled-components";

export default function MovieGenre({ movie }) {
  return (
    <GenreContainer>
      {movie.genres[0] ? <GenreItem content={movie.genres[0].name} /> : null}
      {movie.genres[1] ? <GenreItem content={movie.genres[1].name} /> : null}
      {movie.genres[2] ? <GenreItem content={movie.genres[2].name} /> : null}
    </GenreContainer>
  );
}

const GenreContainer = styled.section`
  display: flex;
  gap: var(--gap-x-small);
  margin-top: var(--margin-medium);
  margin-inline: var(--margin-medium);
`;
