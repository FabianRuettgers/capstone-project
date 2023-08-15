import Image from "next/image";
import { styled } from "styled-components";

export default function DetailGrid({ movie }) {
  if (movie) {
    return (
      <StyledSection>
        <Box>
          <StyledImage
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
            layout="responsive"
            object-fit="cover"
            height={750}
            width={500}
            priority
          />
          <Wrapper>
            <Container>
              <Label>Länge</Label>
              <StyledParagrah>{movie.runtime} min</StyledParagrah>
            </Container>
            <Container>
              <Label>Genre</Label>
              <StyledParagrah>{movie.genres[0].name}</StyledParagrah>
            </Container>
            <Container>
              <Label>Bewertung</Label>
              <StyledParagrah>
                {movie.vote_average.toFixed(1)} / 10
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
  font-size: xx-large;
  margin-top: 3rem;
  margin-bottom: 2rem;
  border-bottom: 2px solid var(--highlight-color);
  padding-bottom: 1rem;
  color: var(--text-color-light);
`;

const StyledImage = styled(Image)`
  border-radius: 2rem;
  box-shadow: 0 0 12px var(--shadow-color-dark);
`;

const Box = styled.div`
  object-fit: contain;
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
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Container = styled.div`
  text-align: center;
  border-radius: 2rem;
  background-color: #bf8f54;
  color: #3a3b3c;

  box-shadow: 0 0 8px var(--shadow-color-dark);
`;