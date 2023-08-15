import ErrorFetching from "@/components/ErrorFetching";
import HeaderNav from "@/components/HeaderNav";
import RandomMovie from "@/components/RandomMovie";
import { styled } from "styled-components";
import useSWR from "swr";

const API_KEY = process.env.API_KEY;

export default function HomePage() {
  const { data, error, isLoading } = useSWR(`/api/movies`);
  if (isLoading) {
    return null;
  }

  if (error || !data || data.success === false) {
    return (
      <>
        <HeaderNav />
        <ErrorFetching />
      </>
    );
  }

  const randomMovie =
    data.results[Math.floor(Math.random() * data.results.length)];
  return (
    <>
      <HeaderNav />
      <Wrapper>
        <RandomMovie randomMovie={randomMovie} />
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
