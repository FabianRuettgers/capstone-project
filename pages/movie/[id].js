import { useRouter } from "next/router";
import useSWR from "swr";
import { styled } from "styled-components";
import HeaderMenu from "@/components/Navigation/Header/HeaderMenu";
import ErrorFetching from "@/components/ErrorHandling/ErrorFetching";
import MovieDetailPage from "@/components/MovieDetailPage";
import LoadFetching from "@/components/LoadingHandling/LoadFetching";
import Head from "next/head";
import CreateMovieRating from "@/components/MovieDetailPage/MovieRatingForm/CreateMovieRating";

export default function Detailpage({
  userInformation,
  handleBookmarkToggle,
  handleRate,
}) {
  const router = useRouter();
  const { id } = router.query;

  const { data, error, isLoading } = useSWR(`/api/movie/${id}`);

  if (isLoading) {
    return (
      <>
        <Head>
          <title>Loading screen</title>
          <meta name="description" content="a Loading-screen" />
        </Head>
        <HeaderMenu title={"Film Details"} />
        <MobileViewWrapper>
          <LoadFetching />
        </MobileViewWrapper>
      </>
    );
  }

  if (error || !data || data.result.success === false) {
    return (
      <>
        <Head>
          <title>Error</title>
          <meta name="description" content="a error-screen" />
        </Head>
        <HeaderMenu title={"Film Details"} />
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
      <HeaderMenu title={"Film Details"} />
      <MobileViewWrapper>
        <MovieDetailPage
          movie={data.result}
          userInformation={userInformation}
          handleBookmarkToggle={handleBookmarkToggle}
        />
      </MobileViewWrapper>
      <CreateMovieRating id={data.result.id} handleRate={handleRate} />
    </>
  );
}

const MobileViewWrapper = styled.div`
  max-width: 420px;
  display: grid;
  margin-left: auto;
  margin-right: auto;
`;
