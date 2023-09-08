import styled from "styled-components";
import ButtonSection from "./MovieDetails/ButtonSection";
import MovieActors from "./MovieDetails/MovieActors";
import MovieComments from "./MovieDetails/MovieComments";
import MovieDescribtion from "./MovieDetails/MovieDescribtion";
import MovieDuration from "./MovieDetails/MovieDuration";
import MovieGenre from "./MovieDetails/MovieGenre";
import MovieImage from "./MovieDetails/MovieImage";
import MovieRating from "./MovieDetails/MovieRating";
import MovieTitle from "./MovieDetails/MovieTitle";
import MovieTrailer from "./MovieDetails/MovieTrailer";
import UserRating from "./MovieDetails/UserRating";

export default function SingleMovieDetails({
  movie,
  userInformation,
  currentAction,
  handleBookmarkToggle,
  handleRateButtonClick,
  handleDeleteButtonClick,
  handleCommentButtonClick,
  handleEditButtonClick,
  handleInputChange,
  handleEditDone,
  handleEditGoBack,
  handleDeleteComment,
  handleCommentDeleteButtonClick,
  handleProviderButtonClick,
}) {
  const userItem = userInformation.find(
    (item) => item && item.id === movie.data.id
  );
  const userRating = userItem ? userItem.rating : null;
  const videoId = movie.videos.results.find(
    (movie) => movie.type === "Trailer"
  )?.key;
  return (
    <StyledMain>
      <GridContainer>
        <MovieImage movie={movie} />
        <MovieDuration movie={movie.data} />
        <MovieGenre movie={movie.data} />
        <MovieRating movie={movie.data} />
      </GridContainer>
      <MovieTitle movie={movie.data} />
      <UserRating rating={userRating} />
      <ButtonSection
        id={movie.data.id}
        currentAction={currentAction}
        userInformation={userInformation}
        handleBookmarkToggle={handleBookmarkToggle}
        handleRateButtonClick={handleRateButtonClick}
        handleDeleteButtonClick={handleDeleteButtonClick}
        handleCommentButtonClick={handleCommentButtonClick}
      />
      {movie.data.overview ? (
        <MovieDescribtion
          movie={movie}
          handleProviderButtonClick={handleProviderButtonClick}
        />
      ) : null}

      {videoId ? <MovieTrailer videoId={videoId} /> : null}
      <MovieActors credits={movie.credits} />
      <MovieComments
        id={movie.data.id}
        userInformation={userInformation}
        currentAction={currentAction}
        MovieComments={movie.reviews}
        handleEditButtonClick={handleEditButtonClick}
        handleInputChange={handleInputChange}
        handleEditDone={handleEditDone}
        handleEditGoBack={handleEditGoBack}
        handleDeleteComment={handleDeleteComment}
        handleCommentDeleteButtonClick={handleCommentDeleteButtonClick}
      />
    </StyledMain>
  );
}
const StyledMain = styled.main`
  margin-bottom: var(--margin-medium);
  max-width: 414px;
  width: 100vw;
`;

const GridContainer = styled.div`
  margin-top: var(--margin-medium);
  margin-inline: var(--margin-medium);
  display: grid;
  grid-template-columns: 70fr 30fr;
  grid-column-gap: var(--gap-medium);
  grid-row-gap: var(--gap-small);
`;
