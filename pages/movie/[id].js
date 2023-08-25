import { useRouter } from "next/router";
import useSWR from "swr";
import { styled } from "styled-components";
import ErrorFetching from "@/components/ErrorHandling/ErrorFetching";
import MovieDetailPage from "@/components/MovieDetailPage";
import LoadFetching from "@/components/LoadingHandling/LoadFetching";
import Head from "next/head";
import CreateMovieRating from "@/components/MovieDetailPage/MovieRatingForm/CreateMovieRating";
import DeleteMovieRating from "@/components/MovieDetailPage/MovieRatingForm/DeleteMovieRating";
import HeaderDetailsPage from "@/components/Navigation/Header/HeaderDetailsPage";
import CreateMovieComment from "@/components/MovieDetailPage/MovieCommentForm/CreateMovieComment";

export default function Detailpage({
  userInformation,
  currentAction,
  handleBookmarkToggle,
  handleRateButtonClick,
  handleRate,
  handleDeleteButtonClick,
  handleDelete,
  handleCommentButtonClick,
  handleComment,
  handleEditButtonClick,
  handleInputChange,
  handleEditDone,
  handleEditGoBack,
  handleDeleteComment,
}) {
  const router = useRouter();
  const { id } = router.query;

  const { data, isLoading, error } = useSWR(`/api/movie/${id}`);
  const HeaderDisable = currentAction.userInput !== "";

  if (isLoading) {
    return (
      <>
        <Head>
          <title>Loading screen</title>
          <meta name="description" content="a Loading-screen" />
        </Head>
        <MobileViewWrapper>
          <LoadingSection>
            <LoadFetching />
          </LoadingSection>
        </MobileViewWrapper>
      </>
    );
  }

  if (error || !data) {
    return (
      <>
        <Head>
          <title>Error</title>
          <meta name="description" content="a error-screen" />
        </Head>
        <MobileViewWrapper>
          <ErrorFetching />
        </MobileViewWrapper>
      </>
    );
  }

  return (
    <>
      <Head>
        <title>Movie Detailpage</title>
        <meta name="description" content="a Movie Detailpage" />
      </Head>
      <HeaderDetailsPage disable={HeaderDisable} />
      <MobileViewWrapper>
        <MovieDetailPage
          movie={data}
          userInformation={userInformation}
          currentAction={currentAction}
          handleBookmarkToggle={handleBookmarkToggle}
          handleRateButtonClick={handleRateButtonClick}
          handleDeleteButtonClick={handleDeleteButtonClick}
          handleCommentButtonClick={handleCommentButtonClick}
          handleEditButtonClick={handleEditButtonClick}
          handleInputChange={handleInputChange}
          handleEditDone={handleEditDone}
          handleEditGoBack={handleEditGoBack}
          handleDeleteComment={handleDeleteComment}
        />
      </MobileViewWrapper>
      {currentAction.userInput === "ACTION_RATING" ? (
        <CreateMovieRating
          id={data.data.id}
          handleRate={handleRate}
          handleGoBackRating={handleRateButtonClick}
        />
      ) : null}
      {currentAction.userInput === "ACTION_DELETE_RATING" ? (
        <DeleteMovieRating
          id={data.data.id}
          handleDelete={handleDelete}
          handleGoBackDelete={handleDeleteButtonClick}
        />
      ) : null}
      {currentAction.userInput === "ACTION_COMMENT" ? (
        <CreateMovieComment
          id={data.data.id}
          handleCommentButtonClick={handleCommentButtonClick}
          handleComment={handleComment}
        />
      ) : null}
    </>
  );
}

const MobileViewWrapper = styled.div`
  max-width: 420px;
  display: grid;
  margin-left: auto;
  margin-right: auto;
`;

const LoadingSection = styled.section`
  height: 100vh;
`;
