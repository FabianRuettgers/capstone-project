import ErrorFetching from "@/components/ErrorHandling/ErrorFetching";
import LoadFetching from "@/components/LoadingHandling/LoadFetching";
import MovieRandom from "@/components/MovieRandom";
import FooterNav from "@/components/Navigation/Footer/FooterNav";
import HeaderNav from "@/components/Navigation/Header/HeaderNav";
import Head from "next/head";
import { useEffect } from "react";
import { styled } from "styled-components";
import useSWR from "swr";

const API_KEY = process.env.API_KEY;

export default function HomePage({ isFetchLoading, startFetchLoading }) {
  const { data, error, isLoading } = useSWR(`/api/movies`);

  useEffect(() => {
    if (isLoading) {
      startFetchLoading();
    }
  }, [isLoading, startFetchLoading]);

  if (isFetchLoading) {
    return (
      <>
        <Head>
          <title>Loading screen</title>
          <meta name="description" content="a Loading-screen" />
        </Head>
        <HeaderNav />
        <MobileViewWrapper>
          <LoadingSection>
            <LoadFetching />
          </LoadingSection>
        </MobileViewWrapper>
        <FooterNav />
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
        <MovieRandom
          randomMovie={
            data.results[Math.floor(Math.random() * data.results.length)]
          }
        />
      </MobileViewWrapper>
      <FooterNav />
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
