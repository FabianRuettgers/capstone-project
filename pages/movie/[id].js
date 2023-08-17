import { useRouter } from "next/router";
import useSWR from "swr";
import { styled } from "styled-components";
import HeaderMenu from "@/components/Navigation/Header/HeaderMenu";
import ErrorFetching from "@/components/ErrorHandling/ErrorFetching";
import MovieDetailPage from "@/components/MovieDetailPage";
import LoadFetching from "@/components/LoadingHandling/LoadFetching";
import Head from "next/head";

export default function Detailpage({ bookmarkedMovies, handleBookmarkToggle }) {
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
          bookmarkedMovies={bookmarkedMovies}
          handleBookmarkToggle={handleBookmarkToggle}
        />
      </MobileViewWrapper>
    </>
  );
}

const MobileViewWrapper = styled.div`
  max-width: 420px;
  display: grid;
  margin-left: auto;
  margin-right: auto;
`;
