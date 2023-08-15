import HeaderMenu from "@/components/HeaderMenu";
import SearchMovie from "@/components/SearchMovie";
import { useState } from "react";
import { styled } from "styled-components";
import useSWR from "swr";

export default function Search() {
  const [query, setQuery] = useState("");
  const fetcher = (...args) => fetch(...args).then((res) => res.json());

  const { data, error } = useSWR(
    query
      ? `https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=de&api_key=4c606aec01f0a1c7daed75110995b085`
      : null,
    fetcher
  );

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  if (error) {
    return <div>Error loading data</div>;
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
