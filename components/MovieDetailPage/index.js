import { styled } from "styled-components";
import ButtonSection from "./MovieDetails/ButtonSection";
import MovieImage from "./MovieDetails/MovieImage";

import MovieTitle from "./MovieDetails/MovieTitle";
import MovieDescribtion from "./MovieDetails/MovieDescribtion";
import MovieProvider from "./MovieDetails/MovieProvider";
import MovieComments from "./MovieDetails/MovieComments";
import MovieGenre from "./MovieGenre";
import MovieRating from "./MovieRating";

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
  console.log(movie);
  return (
    <StyledMain>
      <MovieImage movie={movie} />
      <MovieTitle movie={movie.data} />
      <MovieRating movie={movie.data} />
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

      <MovieProvider id={movie.data.id} />

      <MovieComments MovieComments={movie.reviews} />
    </StyledMain>
  );
}
const StyledMain = styled.main``;
