import { styled } from "styled-components";
import ButtonSection from "./MovieDetails/ButtonSection";
import MovieImage from "./MovieDetails/MovieImage";
import MovieLabel from "./MovieDetails/MovieLabel";
import MovieTitle from "./MovieDetails/MovieTitle";
import MovieDescribtion from "./MovieDetails/MovieDescribtion";
import MovieProvider from "./MovieDetails/MovieProvider";

export default function MovieDetailPage({
  movie,
  bookmarkedMovies,
  handleBookmarkToggle,
}) {
  return (
    <StyledMain>
      <DetailsContentSection>
        <MovieImage movie={movie} />
        <DetailsContentFlexContainer>
          {movie.runtime ? (
            <MovieLabel heading={"Länge"} content={`${movie.runtime} min`} />
          ) : (
            <MovieLabel heading={"Länge"} content={`unbekannt`} />
          )}
          {movie.genres.length !== 0 ? (
            <MovieLabel heading={"Genre"} content={movie.genres[0].name} />
          ) : (
            <MovieLabel heading={"Genre"} content={`unbekannt`} />
          )}
          {movie.vote_average ? (
            <MovieLabel
              heading={"Rating"}
              content={`${movie.vote_average.toFixed(1)} / 10`}
            />
          ) : (
            <MovieLabel heading={"Rating"} content={`unbekannt`} />
          )}
        </DetailsContentFlexContainer>
      </DetailsContentSection>
      <TitleContentSection>
        <MovieTitle movie={movie} />
      </TitleContentSection>
      <ButtonContentSection>
        <ButtonSection
          id={movie.id}
          bookmarkedMovies={bookmarkedMovies}
          handleBookmarkToggle={handleBookmarkToggle}
        />
      </ButtonContentSection>
      <DescribtionContentSection>
        <MovieDescribtion movie={movie} />
      </DescribtionContentSection>
      <ProviderContentSection>
        <MovieProvider id={movie.id} />
      </ProviderContentSection>
    </StyledMain>
  );
}
const StyledMain = styled.main`
  display: grid;

  margin-left: var(--margin-medium);
  margin-right: var(--margin-medium);

  margin-bottom: 12vh;
`;

const DetailsContentSection = styled.section`
  width: 100%;
  display: grid;
  grid-template-columns: 60% 1fr;

  align-items: center;
  align-items: center;
  column-gap: var(--gap-small);
  margin-top: var(--margin-medium);
  margin-bottom: var(--margin-medium);
`;

const DetailsContentFlexContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const TitleContentSection = styled.section`
  margin-top: var(--margin-small);
  margin-bottom: var(--margin-small);
`;
const ButtonContentSection = styled.section`
  margin-top: var(--margin-small);
  margin-bottom: var(--margin-small);
`;
const DescribtionContentSection = styled.section`
  margin-top: var(--margin-small);
  margin-bottom: var(--margin-small);
`;
const ProviderContentSection = styled.section`
  margin-top: var(--margin-small);
  margin-bottom: var(--margin-medium);
`;
