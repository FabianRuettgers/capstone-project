import ErrorFetching from "@/components/ErrorFetching";
import HeaderMenu from "@/components/HeaderMenu";
import LoadFetching from "@/components/LoadFetching";
import SearchMovie from "@/components/SearchMovie";
import { styled } from "styled-components";
import useSWR from "swr";

export default function Search({ query, setQuery }) {
  const { data, error, isLoading } = useSWR(
    query ? `/api/movie/search/${query}` : null
  );

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  if (isLoading) {
    return null;
  }

  if (error) {
    return (
      <>
        <HeaderMenu title={"Film suchen"} />
        <ErrorFetching />
      </>
    );
  }

  if (!data) {
    return (
      <>
        <HeaderMenu title={"Film suchen"} />
        <Container>
          <StyledInput type="text" value={query} onChange={handleInputChange} />
        </Container>
      </>
    );
  }

  console.log(data.results);

  return (
    <>
      <HeaderMenu title={"Film suchen"} />
      <Container>
        <StyledInput type="text" value={query} onChange={handleInputChange} />
        <SearchMovie movie={data.results} />
      </Container>
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
