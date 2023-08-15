import Image from "next/image";
import Link from "next/link";
import { styled } from "styled-components";

export default function SearchMovie({ movie }) {
  return (
    <List>
      {movie.map((movie) => (
        <StyledListitem key={movie.id}>
          <StyledLink href={`/movie/${movie.id}`}>
            <ImageContainer>
              {movie.poster_path ? (
                <StyledImage
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={movie.title}
                  layout="responsive"
                  object-fit="contain"
                  height={750}
                  width={500}
                  priority
                />
              ) : (
                <StyledImage
                  src={"/backup.jpg"}
                  alt={movie.title}
                  layout="responsive"
                  object-fit="contain"
                  height={750}
                  width={500}
                  priority
                />
              )}
            </ImageContainer>
            <Heading>{movie.title} </Heading>
            <StyledParagraph>
              {movie.release_date
                ? movie.release_date.slice(0, 4)
                : "Release unbekannt"}
            </StyledParagraph>
            <SvgContainer>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="48"
                viewBox="0 -960 960 960"
                width="48"
              >
                <path d="m304-82-56-57 343-343-343-343 56-57 400 400L304-82Z" />
              </svg>
            </SvgContainer>
          </StyledLink>
        </StyledListitem>
      ))}
    </List>
  );
}
const SvgContainer = styled.div`
  grid-area: 1 / 3 / 3 / 4;
  scale: 0.7;
`;

const ImageContainer = styled.div`
  grid-area: 1 / 1 / 3 / 2;
  width: 100%;
  height: 100%;
  display: grid;
  align-items: center;
  justify-items: center;
`;

const StyledImage = styled(Image)`
  border-radius: 1rem;
  object-fit: contain;
  background-color: white;
  box-shadow: 0 0 12px var(--shadow-color-dark);
`;
const StyledSpacer = styled.div`
  border-radius: 1rem;
  object-fit: contain;
  background-color: var(--highlight-color);
  height: 100%;
  width: 100%;
`;

const StyledListitem = styled.li`
  list-style: none;
  margin: 0;
  padding: 0;
  width: 100%;

  margin-bottom: 1.5rem;
  border-radius: 1rem;
  background-color: var(--lowlight-dark);
  box-shadow: 0 0 12px var(--shadow-color-dark);
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  padding: 1rem;
  margin: 0;
  color: var(--text-color-light);
  fill: var(--text-color-light);
  display: grid;
  grid-template-columns: 24% 1fr 15%;

  grid-column-gap: 1rem;
  justify-items: left;
  align-items: center;
`;

const Heading = styled.h2`
  padding: 0;
  margin: 0;
  font-size: 1rem;
  padding-bottom: 1rem;
  grid-area: 1 / 2 / 2 / 3;

  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
`;

const StyledParagraph = styled.p`
  font-size: 1rem;
  padding: 0;
  margin: 0;
  grid-area: 2 / 2 / 3 / 3;
`;
