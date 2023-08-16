import Image from "next/image";
import { styled } from "styled-components";

export default function DetailGrid({ movie }) {
  console.log(movie);
  return (
    <StyledSection>
      <Box>
        {movie.poster_path && movie.poster_path !== null ? (
          <StyledImage
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
            layout="responsive"
            objectFit="contain"
            height={750}
            width={500}
            priority
          />
        ) : (
          <StyledImage
            src={`/backup.jpg`}
            alt={movie.title}
            layout="responsive"
            objectFit="contain"
            height={750}
            width={500}
            priority
          />
        )}

        <Wrapper>
          <Container>
            <Label>Länge</Label>
            <StyledParagrah>
              {movie.runtime ? `${movie.runtime} min` : "unbekannt"}
            </StyledParagrah>
          </Container>
          <Container>
            <Label>Genre</Label>
            <StyledParagrah>
              {movie.genres.lenght !== 0 ? movie.genres[0].name : "unbekannt"}
            </StyledParagrah>
          </Container>
          <Container>
            <Label>Bewertung</Label>
            <StyledParagrah>
              {movie.vote_average
                ? `${movie.vote_average.toFixed(1)} / 10`
                : "unbekannt"}
            </StyledParagrah>
          </Container>
        </Wrapper>
      </Box>
      <Heading>{movie.title}</Heading>
      <Describtion>
        {movie.overview ? movie.overview : "keine Filmbeschreibung vorhanden"}
      </Describtion>
    </StyledSection>
  );
}
const StyledParagrah = styled.p`
  margin-top: 0;
  font-weight: 800;
`;

const Describtion = styled.p`
  font-size: medium;
  font-weight: 100;
  color: var(--text-color-light);
  text-align: justify;
`;

const Label = styled.p`
  font-size: small;
  font-weight: 100;
`;

const Heading = styled.h1`
  font-size: 1.9rem;
  margin-top: 3rem;
  margin-bottom: 2rem;
  border-bottom: 2px solid var(--highlight-color);
  padding-bottom: 1rem;
  color: var(--text-color-light);
  overflow: hidden;
  text-overflow: ellipsis;
`;

const StyledImage = styled(Image)`
  border-radius: 2rem;
  box-shadow: 0 0 12px var(--shadow-color-dark);
  background-color: var(--highlight-color);
`;

const Box = styled.div`
  height: auto;
  width: 100%;
  display: grid;
  grid-template-columns: 60% 1fr;
  column-gap: 2rem;
`;

const StyledSection = styled.section`
  margin-left: 2rem;
  margin-right: 2rem;
  margin-top: 12vh;
  padding-top: 2rem;
  display: grid;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Container = styled.div`
  text-align: center;
  border-radius: 1.5rem;
  background-color: #bf8f54;
  color: #3a3b3c;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  box-shadow: 0 0 8px var(--shadow-color-dark);
`;
