import Image from "next/image";
import styled from "styled-components";

export default function MovieImage({ movie }) {
  const movieImage = movie.images?.posters[0]?.file_path
    ? `https://image.tmdb.org/t/p/w500${movie.images.posters[0].file_path}`
    : `https://image.tmdb.org/t/p/w500${movie.data.poster_path}`;
  const aspectRatio = movie.images?.posters[0]?.aspect_ratio
    ? movie.images.posters[0].aspect_ratio * 225
    : 0.667 * 225;
  return (
    <ImageContainer aspectRatio={aspectRatio}>
      <StyledImage
        src={movieImage}
        alt={movie.data.title}
        layout="fill"
        objectFit="cover"
      />
    </ImageContainer>
  );
}

const ImageContainer = styled.div`
  position: relative;
  grid-area: 1 / 1 / 4 / 2;
  width: 100%;
  padding-top: ${(props) => props.aspectRatio}%;
`;

const StyledImage = styled(Image)`
  box-shadow: 0 0 8px var(--shadow-color-dark);
  border-radius: var(--border-radius-small);
`;
