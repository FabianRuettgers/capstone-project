import ErrorFetching from "@/components/ErrorFetching";
import HeaderNav from "@/components/HeaderNav";
import LoadFetching from "@/components/LoadFetching";
import RandomMovie from "@/components/RandomMovie";
import { useEffect, useState } from "react";
import { styled } from "styled-components";
import useSWR from "swr";

const API_KEY = process.env.API_KEY;

export default function HomePage() {
  const { data, error, isLoading } = useSWR(`/api/movies`);
  const [showRandomMovie, setShowRandomMovie] = useState(false);

  useEffect(() => {
    if (!isLoading) {
      setTimeout(() => {
        setShowRandomMovie(true);
      }, 800);
    }
  }, [isLoading]);

  if (!showRandomMovie) {
    return (
      <>
        <HeaderNav />
        <FetchWrapper>
          <LoadFetching />
        </FetchWrapper>
      </>
    );
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
        {showRandomMovie && <RandomMovie randomMovie={randomMovie} />}
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

const FetchWrapper = styled.main`
  max-width: 420px;
  display: grid;
  margin-left: auto;
  margin-right: auto;
  height: 76vh;
  width: 100%;
  margin-top: 12vh;
  margin-bottom: 12vh;
  display: grid;
  justify-items: center;
  align-items: center;
`;
