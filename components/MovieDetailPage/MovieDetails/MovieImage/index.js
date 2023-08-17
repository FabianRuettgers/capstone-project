import Image from "next/image";
import { styled } from "styled-components";

export default function MovieImage({ movie }) {
  return (
    <>
      {movie.poster_path !== null ? (
        <StyledImage
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
          layout="responsive"
          objectFit="contain"
          height={750}
          width={500}
          priority={true}
        />
      ) : (
        <StyledImage
          src={`/backup.jpg`}
          alt={movie.title}
          layout="responsive"
          objectFit="contain"
          height={750}
          width={500}
          priority={true}
        />
      )}
    </>
  );
}

const StyledImage = styled(Image)`
  background-color: var(--highlight-color);
  box-shadow: 0 0 12px var(--shadow-color-dark);
  border-radius: var(--border-radius-medium);
`;
