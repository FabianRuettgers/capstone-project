import { styled } from "styled-components";
import ButtonSection from "./MovieDetails/ButtonSection";
import MovieImage from "./MovieDetails/MovieImage";

import MovieTitle from "./MovieDetails/MovieTitle";
import MovieDescribtion from "./MovieDetails/MovieDescribtion";
import MovieProvider from "./MovieDetails/MovieProvider";
import MovieComments from "./MovieDetails/MovieComments";
import MovieGenre from "./MovieGenre";
import MovieRating from "./MovieRating";
import UserRating from "./UserRating";

export default function MovieDetailPage({
  movie,
  userInformation,
  handleBookmarkToggle,
  handleRateButtonClick,
  startRating,
  handleDeleteButtonClick,
}) {
  const userItem = userInformation.find((item) => item.id === movie.data.id);
  const userRating = userItem ? userItem.rating : null;

  return (
    <StyledMain>
      <MovieImage movie={movie} />
      <MovieTitle movie={movie.data} />
      <MovieRating movie={movie.data} />
      <UserRating rating={userRating} />
      <MovieDescribtion movie={movie.data} />
      <MovieGenre movie={movie.data} />
      <ButtonSection
        id={movie.data.id}
        userInformation={userInformation}
        handleBookmarkToggle={handleBookmarkToggle}
        handleRateButtonClick={handleRateButtonClick}
        handleDeleteButtonClick={handleDeleteButtonClick}
        startRating={startRating}
      />
      <MovieComments MovieComments={movie.reviews} />
      <MovieProvider id={movie.data.id} />
    </StyledMain>
  );
}
const StyledMain = styled.main`
  margin-bottom: var(--margin-medium);
`;
