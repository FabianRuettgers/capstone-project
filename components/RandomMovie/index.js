import { styled } from "styled-components";
import ReloadFetchButton from "../RelaodFetchButton";
import Image from "next/image";

export default function RandomMovie({ randomMovie }) {
  return (
    <StyledMain>
      <ImageContainer>
        <StyledImage
          src={`https://image.tmdb.org/t/p/w500${randomMovie.poster_path}`}
          alt="Movie Poster"
          height={750}
          width={500}
        />

        <Rating>{randomMovie.vote_average} / 10</Rating>
        <ButtonWrapper>
          <ReloadFetchButton />
        </ButtonWrapper>
      </ImageContainer>
    </StyledMain>
  );
}

const StyledMain = styled.main`
  height: 76vh;
  width: 100%;
  margin-top: 12vh;
  margin-bottom: 12vh;
  display: flex;
  justify-content: center;
`;

const ImageContainer = styled.div`
  position: relative;
  margin: 2rem;
`;

const StyledImage = styled(Image)`
  width: 100%;
  height: 100%;
  object-fit: cover;
  box-shadow: 0 0 12px var(--shadow-color-dark);
  border-radius: 2rem;
`;

const Rating = styled.p`
  margin: 0;
  padding: 0.5rem;
  border-radius: 2rem;
  position: absolute;
  bottom: 1rem;
  right: 1rem;
  background-color: #bf8f54;
  color: #3a3b3c;
  font-weight: 800;
`;

const ButtonWrapper = styled.div`
  position: absolute;
  top: 1rem;
  right: 1rem;
`;
