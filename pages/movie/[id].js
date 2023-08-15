import DetailMovie from "@/components/DetailMovie";
import HeaderMenu from "@/components/HeaderMenu";
import DetailProvider from "@/components/DetailProvider";
import ErrorFetching from "@/components/ErrorFetching";
import { useRouter } from "next/router";
import useSWR from "swr";
import { styled } from "styled-components";

const API_KEY = process.env.API_KEY;

export default function Detailpage() {
  const router = useRouter();
  const { id } = router.query;

  const { data, error, isLoading } = useSWR(
    `https://api.themoviedb.org/3/movie/${id}?language=de&api_key=${API_KEY}`
  );

  if (isLoading) {
    return null;
  }

  if (error || !data || data.success === false) {
    return (
      <>
        <HeaderMenu title={"Film Details"} />
        <ErrorFetching />
      </>
    );
  }

  const movie = data;
  return (
    <>
      <HeaderMenu title={"Film Details"} />
      <Wrapper>
        <DetailMovie movie={movie} />
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
