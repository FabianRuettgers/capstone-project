import { styled } from "styled-components";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import ButtonSection from "./MovieDetails/ButtonSection";
import MovieImage from "./MovieDetails/MovieImage";
import MovieTitle from "./MovieDetails/MovieTitle";
import MovieDescribtion from "./MovieDetails/MovieDescribtion";
import MovieComments from "./MovieDetails/MovieComments";
import MovieRating from "./MovieDetails/MovieRating";
import UserRating from "./MovieDetails/UserRating";
import MovieGenre from "./MovieDetails/MovieGenre";
import MovieActors from "./MovieDetails/MovieActors";
import MovieDuration from "./MovieDetails/MovieDuration";
import MovieTrailer from "./MovieDetails/MovieTrailer";

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

  return (
    <StyledMain>
      <CustomCarousel>
        <GridContainer>
          <MovieImage movie={movie} />
          <MovieDuration movie={movie.data} />
          <MovieGenre movie={movie.data} />
          <MovieRating movie={movie.data} />
        </GridContainer>
        <MovieTrailer movie={movie} />
      </CustomCarousel>
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
      <MovieDescribtion
        movie={movie}
        handleProviderButtonClick={handleProviderButtonClick}
      />
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
`;

const GridContainer = styled.div`
  margin-top: 2rem;
  margin-inline: 2rem;
  display: grid;
  grid-template-columns: 70fr 30fr;
  grid-column-gap: 2rem;
  grid-row-gap: 1rem;
`;

const CustomCarousel = styled(Carousel)`
  margin-right: 0.5rem;
`;
