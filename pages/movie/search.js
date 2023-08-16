import ErrorFetching from "@/components/ErrorFetching";
import HeaderMenu from "@/components/HeaderMenu";
import LoadFetching from "@/components/LoadFetching";
import SearchMovie from "@/components/SearchMovie";
import { useEffect, useState } from "react";
import { styled } from "styled-components";
import useSWR from "swr";

export default function Search({ query, setQuery }) {
  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const { data, error, isLoading } = useSWR(
    query ? `/api/movie/search/${query}` : null
  );

  if (error) {
    return (
      <>
        <HeaderMenu title={"Film suchen"} />
        <ErrorFetching />
      </>
    );
  }

  return (
    <>
      <HeaderMenu title={"Film suchen"} />
      <Wrapper>
        <Container>
          <StyledInput type="text" value={query} onChange={handleInputChange} />
          {isLoading ? (
            <FetchWrapper>
              <LoadFetching />
            </FetchWrapper>
          ) : null}
          {!data ? null : null}
          {data ? (
            <>
              <SearchMovie movie={data.results} />
            </>
          ) : null}
        </Container>
      </Wrapper>
    </>
  );
}

const Container = styled.div`
  color: var(--text-color-light);
  fill: var(--text-color-light);
  padding: 2rem;
  margin-top: 12vh;
  margin-bottom: 12vh;
`;

const StyledInput = styled.input`
  width: 100%;
  height: 2rem;
  font-size: large;
  margin-bottom: 2rem;
`;

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
