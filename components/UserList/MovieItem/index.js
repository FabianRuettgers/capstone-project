import Image from "next/image";
import Link from "next/link";
import { styled } from "styled-components";
import useSWR from "swr";

export default function MovieItem({ id, date }) {
  const { data, error } = useSWR(`/api/movie/${id}`);

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  if (!data) {
    return <p>Loading...</p>;
  }

  const movie = data.result;
  console.log(movie);

  return (
    <StyledListitem key={movie.id}>
      <StyledLink href={`/movie/${movie.id}`}>
        <ImageContainer>
          <StyledImage
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
            layout="responsive"
            object-fit="contain"
            height={750}
            width={500}
            priority={true}
          />
        </ImageContainer>
        <Heading>{movie.title}</Heading>
        <StyledParagraph>{date}</StyledParagraph>
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
  );
}

const StyledListitem = styled.li`
  background-color: var(--lowlight-dark);
  box-shadow: 0 0 12px var(--shadow-color-dark);
  margin-bottom: var(--margin-small);
  border-radius: var(--border-radius-small);

  &:last-child {
    margin-bottom: var(--margin-medium);
  }
`;

const StyledLink = styled(Link)`
  display: grid;
  grid-template-columns: 24% 1fr 15%;
  grid-column-gap: var(--gap-small);
  justify-items: left;
  align-items: center;

  padding: var(--padding-small);
`;

const ImageContainer = styled.div`
  grid-area: 1 / 1 / 3 / 2;
  display: grid;
  align-items: center;
  justify-items: center;
`;

const StyledImage = styled(Image)`
  background-color: var(--highlight-color);
  box-shadow: 0 0 12px var(--shadow-color-dark);
  border-radius: var(--border-radius-small);
  object-fit: contain;
`;

const Heading = styled.h2`
  color: var(--text-color-light-heading);
  font-size: medium;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
  grid-area: 1 / 2 / 2 / 3;
  padding-bottom: var(--padding-small);
`;

const StyledParagraph = styled.p`
  color: var(--text-color-light-heading);
  font-size: medium;
  grid-area: 2 / 2 / 3 / 3;
`;
const SvgContainer = styled.div`
  fill: var(--text-color-light-heading);
  grid-area: 1 / 3 / 3 / 4;
  scale: 0.7;
`;
