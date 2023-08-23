import Image from "next/image";
import { styled } from "styled-components";

export default function MovieImage({ movie }) {
  const movieImage =
    `https://image.tmdb.org/t/p/w500${movie.data.poster_path}` || `/backup.jpg`;
  return (
    <ImageContainer>
      <Image
        src={movieImage}
        alt={movie.data.title}
        layout="fill"
        objectFit="cover"
        objectPosition="center"
      />
    </ImageContainer>
  );
}

const ImageContainer = styled.div`
  box-shadow: 0 0 24px var(--shadow-color-dark);
  height: 100vh;
  max-width: 420px;
  overflow: hidden;
`;
