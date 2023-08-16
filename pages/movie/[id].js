import DetailMovie from "@/components/DetailMovie";
import HeaderMenu from "@/components/HeaderMenu";
import DetailProvider from "@/components/DetailProvider";
import ErrorFetching from "@/components/ErrorFetching";
import { useRouter } from "next/router";
import useSWR from "swr";
import { styled } from "styled-components";

export default function Detailpage({ bookmarkedMovies, handleBookmarkToggle }) {
  const router = useRouter();
  const { id } = router.query;

  const { data, error, isLoading } = useSWR(`/api/movie/${id}`);

  if (isLoading) {
    return null;
  }

  if (error || !data || data.result.success === false) {
    return (
      <>
        <HeaderMenu title={"Film Details"} />
        <ErrorFetching />
      </>
    );
  }

  const movie = data.result;

  return (
    <>
      <HeaderMenu title={"Film Details"} />
      <Wrapper>
        <DetailMovie
          movie={movie}
          bookmarkedMovies={bookmarkedMovies}
          handleBookmarkToggle={handleBookmarkToggle}
        />
        <DetailProvider id={movie.id} />
      </Wrapper>
    </>
  );
}

const Wrapper = styled.main`
  max-width: 420px;
  display: grid;
  margin-left: auto;
  margin-right: auto;
`;
