import ErrorFetching from "@/components/ErrorHandling/ErrorFetching";
import MovieSearch from "@/components/MovieSearch";
import HeaderMenu from "@/components/Navigation/Header/HeaderMenu";
import Head from "next/head";
import styled from "styled-components";
import useSWR from "swr";

export default function Search({ currentAction, handleQueryInputChange }) {
  const { data, error, isLoading } = useSWR(
    currentAction.query ? `/api/movie/search/${currentAction.query}` : null
  );

  if (error) {
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
        <title>Movie Search</title>
        <meta name="description" content="a movie search form" />
      </Head>
      <HeaderMenu title={"Film suchen"} />
      <MobileViewWrapper>
        <MovieSearch
          query={currentAction.query}
          handleInputChange={handleQueryInputChange}
          data={data}
          isLoading={isLoading}
        />
      </MobileViewWrapper>
    </>
  );
}

const MobileViewWrapper = styled.main`
  max-width: 414px;
  display: grid;
  margin-left: auto;
  margin-right: auto;
`;
