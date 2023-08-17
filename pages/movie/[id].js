import { useRouter } from "next/router";
import useSWR from "swr";
import { styled } from "styled-components";
import HeaderMenu from "@/components/Navigation/Header/HeaderMenu";
import ErrorFetching from "@/components/ErrorHandling/ErrorFetching";
import MovieDetailPage from "@/components/MovieDetailPage";
import LoadFetching from "@/components/LoadingHandling/LoadFetching";

export default function Detailpage({ bookmarkedMovies, handleBookmarkToggle }) {
  const router = useRouter();
  const { id } = router.query;

  const { data, error, isLoading } = useSWR(`/api/movie/${id}`);

  if (isLoading) {
    return (
      <>
        <title>Loading screen</title>
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
        <title>Error</title>
        <HeaderMenu title={"Film Details"} />
        <MobileViewWrapper>
          <ErrorFetching />
        </MobileViewWrapper>
      </>
    );
  }

  return (
    <>
      <title>Movie Detailpage</title>
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
