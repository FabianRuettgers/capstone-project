import ErrorFetching from "@/components/ErrorFetching";
import ErrorInput from "@/components/ErrorInput";
import HeaderMenu from "@/components/HeaderMenu";
import LoadFetching from "@/components/LoadFetching";
import SearchMovie from "@/components/SearchMovie";
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
  console.log(data);
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
          {data && data.results.length === 0 ? <ErrorInput /> : null}

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
  height: 76vh;
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

const FetchWrapper = styled.div`
  height: 100%;
  display: grid;
  justify-items: center;
  align-items: center;
`;
