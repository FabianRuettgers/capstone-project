import ErrorFetching from "@/components/ErrorHandling/ErrorFetching";
import HeaderMenu from "@/components/Navigation/Header/HeaderMenu";
import { styled } from "styled-components";
import useSWR from "swr";
import MovieSearch from "@/components/MovieSearch";
import Head from "next/head";

export default function Search({ query, setQuery }) {
  const { data, error, isLoading } = useSWR(
    query ? `/api/movie/search/${query}` : null
  );

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  if (error) {
    return (
      <>
        <Head>
          <title>Error</title>
          <meta name="description" content="a error-screen" />
        </Head>
        <HeaderMenu title={"Film suchen"} />
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
          query={query}
          handleInputChange={handleInputChange}
          data={data}
          isLoading={isLoading}
        />
      </MobileViewWrapper>
    </>
  );
}

const MobileViewWrapper = styled.main`
  max-width: 420px;
  display: grid;
  margin-left: auto;
  margin-right: auto;
`;
