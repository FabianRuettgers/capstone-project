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

export default function Detailpage({
  userInformation,
  handleBookmarkToggle,
  handleRate,
  handleRateButtonClick,
  startRating,
  handleDelete,
  handleDeleteButtonClick,
  startDelete,
}) {
  const router = useRouter();
  const { id } = router.query;

  const { data, isLoading, error } = useSWR(`/api/movie/${id}`);
  const HeaderDisable = startRating || startDelete;

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
          handleBookmarkToggle={handleBookmarkToggle}
          handleRateButtonClick={handleRateButtonClick}
          handleDeleteButtonClick={handleDeleteButtonClick}
          startRating={startRating}
        />
      </MobileViewWrapper>
      {startRating ? (
        <CreateMovieRating
          id={data.data.id}
          handleRate={handleRate}
          handleGoBackRating={handleRateButtonClick}
        />
      ) : null}
      {startDelete ? (
        <DeleteMovieRating
          id={data.data.id}
          handleDelete={handleDelete}
          handleGoBackDelete={handleDeleteButtonClick}
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
