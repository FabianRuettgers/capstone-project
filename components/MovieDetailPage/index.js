import { styled } from "styled-components";
import ButtonSection from "./MovieDetails/ButtonSection";
import MovieImage from "./MovieDetails/MovieImage";
import MovieTitle from "./MovieDetails/MovieTitle";
import MovieDescribtion from "./MovieDetails/MovieDescribtion";
import MovieProvider from "./MovieDetails/MovieProvider";
import MovieComments from "./MovieDetails/MovieComments";

import MovieRating from "./MovieDetails/MovieRating";
import UserRating from "./MovieDetails/UserRating";
import MovieGenre from "./MovieDetails/MovieGenre";

export default function MovieDetailPage({
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
}) {
  const userItem = userInformation.find(
    (item) => item && item.id === movie.data.id
  );
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
        currentAction={currentAction}
        userInformation={userInformation}
        handleBookmarkToggle={handleBookmarkToggle}
        handleRateButtonClick={handleRateButtonClick}
        handleDeleteButtonClick={handleDeleteButtonClick}
      />
      <MovieComments
        id={movie.data.id}
        userInformation={userInformation}
        currentAction={currentAction}
        MovieComments={movie.reviews}
        handleCommentButtonClick={handleCommentButtonClick}
        handleEditButtonClick={handleEditButtonClick}
        handleInputChange={handleInputChange}
        handleEditDone={handleEditDone}
        handleEditGoBack={handleEditGoBack}
        handleDeleteComment={handleDeleteComment}
      />

      <MovieProvider id={movie.data.id} />
    </StyledMain>
  );
}
const StyledMain = styled.main`
  margin-bottom: var(--margin-medium);
`;
