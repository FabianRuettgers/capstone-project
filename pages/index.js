import ErrorFetching from "@/components/ErrorHandling/ErrorFetching";
import LoadFetching from "@/components/LoadingHandling/LoadFetching";
import MovieRandom from "@/components/MovieRandom";
import HeaderNav from "@/components/Navigation/Header/HeaderNav";
import Head from "next/head";
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
        <Head>
          <title>Loading screen</title>
          <meta name="description" content="a Loading-screen" />
        </Head>
        <HeaderNav />
        <MobileViewWrapper>
          <LoadFetching />
        </MobileViewWrapper>
      </>
    );
  }

  if (error || !data || data.success === false) {
    return (
      <>
        <Head>
          <title>Error</title>
          <meta name="description" content="a error-screen" />
        </Head>
        <HeaderNav />
        <MobileViewWrapper>
          <ErrorFetching />
        </MobileViewWrapper>
      </>
    );
  }

  return (
    <>
      <Head>
        <title>Random Movie Spotlight-page</title>
        <meta name="description" content="a random Movie spotlightpage" />
      </Head>
      <HeaderNav />
      <MobileViewWrapper>
        {showRandomMovie && (
          <MovieRandom
            randomMovie={
              data.results[Math.floor(Math.random() * data.results.length)]
            }
          />
        )}
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
