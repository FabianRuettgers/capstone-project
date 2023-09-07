import { useRouter } from "next/router";
import useSWR from "swr";
import { styled } from "styled-components";
import ErrorFetching from "@/components/ErrorHandling/ErrorFetching";
import SingleMovieDetails from "@/components/SingleMovieDetails";
import LoadFetching from "@/components/LoadingHandling/LoadFetching";
import Head from "next/head";
import CreateMovieRating from "@/components/SingleMovieDetails/MovieRatingForm/CreateMovieRating";
import DeleteMovieRating from "@/components/SingleMovieDetails/MovieRatingForm/DeleteMovieRating";
import CreateMovieComment from "@/components/SingleMovieDetails/MovieCommentForm/CreateMovieComment";
import DeleteMovieComment from "@/components/SingleMovieDetails/MovieCommentForm/DeleteMovieComment";
import MovieProvider from "@/components/SingleMovieDetails/MovieDetails/MovieProvider";
import HeaderMenu from "@/components/Navigation/Header/HeaderMenu";

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
  handleCommentDeleteButtonClick,
  handleProviderButtonClick,
}) {
  const router = useRouter();
  const { id } = router.query;

  const { data, isLoading, error } = useSWR(`/api/movie/${id}`);
  const HeaderDisable = currentAction.userInput !== "";

  if (isLoading) {
    return (
      <>
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
        <MobileViewWrapper>
          <ErrorFetching />
        </MobileViewWrapper>
      </>
    );
  }

  return (
    <>
      <Head>
        <title>{data.data.title}</title>
        <meta name="description" content={`Detailpage of ${data.data.title}`} />
      </Head>
      <HeaderMenu title={"Movie Details"} />
      <MobileViewWrapper>
        <SingleMovieDetails
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
          handleCommentDeleteButtonClick={handleCommentDeleteButtonClick}
          handleProviderButtonClick={handleProviderButtonClick}
        />
      </MobileViewWrapper>
      {currentAction.userInput === "ACTION_RATING" ? (
        <CreateMovieRating
          id={data.data.id}
          data={data}
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
      {currentAction.userInput === "ACTION_DELETE_COMMENT" ? (
        <DeleteMovieComment
          id={data.data.id}
          commentId={currentAction.editingComment.id}
          handleCommentDeleteButtonClick={handleCommentDeleteButtonClick}
          handleDeleteComment={handleDeleteComment}
        />
      ) : null}
      {currentAction.userInput === `ACTION_SHOW_PROVIDER` ? (
        <MovieProvider
          movie={data.provider}
          handleProviderButtonClick={handleProviderButtonClick}
        />
      ) : null}
    </>
  );
}

const MobileViewWrapper = styled.div`
  max-width: 414px;
  display: grid;
  margin-left: auto;
  margin-right: auto;
`;

const LoadingSection = styled.section`
  height: 100vh;
`;
