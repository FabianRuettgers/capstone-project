import { styled } from "styled-components";
import LoadFetching from "../LoadingHandling/LoadFetching";
import ErrorInput from "../ErrorHandling/ErrorInput";
import MovieSearchList from "./MovieSearchList";

export default function MovieSearch({
  query,
  handleInputChange,
  data,
  isLoading,
}) {
  return (
    <StyledMain>
      <StyledInput
        type="text"
        placeholder="Tippe um einen Film zu suchen"
        value={query}
        onChange={handleInputChange}
      />
      {isLoading ? (
        <LoadFetchWrapper>
          <LoadFetching />
        </LoadFetchWrapper>
      ) : null}
      {data && data.results.length === 0 ? <ErrorInput /> : null}

      {data ? (
        <>
          <MovieSearchList movie={data.results} />
        </>
      ) : null}
    </StyledMain>
  );
}

const StyledMain = styled.main`
  padding: var(--padding-medium);
  height: 76vh;
`;

const StyledInput = styled.input`
  font-size: var(--header-h2);
  width: 100%;
  height: 3rem;
  margin-bottom: var(--margin-medium);
`;

const LoadFetchWrapper = styled.div`
  height: 100%;
  display: flex;
  justify-items: center;
  align-items: center;
`;
