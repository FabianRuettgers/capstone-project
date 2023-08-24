import { styled } from "styled-components";
import ReloadFetchButton from "../Buttons/RelaodFetchButton";
import Image from "next/image";
import Link from "next/link";

export default function MovieRandom({ randomMovie }) {
  return (
    <StyledMain>
      <StyledSection>
        <StyledLink href={`/movie/${randomMovie.id}`}>
          <StyledImage
            src={`https://image.tmdb.org/t/p/w500${randomMovie.poster_path}`}
            alt={randomMovie.title}
            height={750}
            width={500}
          />
        </StyledLink>
        <Rating>{randomMovie.vote_average} / 10</Rating>
        <ButtonWrapper>
          <ReloadFetchButton />
        </ButtonWrapper>
      </StyledSection>
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

const StyledSection = styled.section`
  position: relative;
  margin: var(--margin-medium);
`;

const StyledLink = styled(Link)`
  height: max-content;
`;

const StyledImage = styled(Image)`
  width: 100%;
  height: 100%;
  object-fit: cover;
  box-shadow: 0 0 12px var(--shadow-color-dark);
  border-radius: var(--border-radius-medium);
  position: relative;
`;

const Rating = styled.p`
  color: var(--text-color-dark-heading);
  background-color: var(--highlight-color);
  font-size: var(--header-h3);
  position: absolute;
  border-radius: var(--border-radius-medium);
  padding: var(--padding-x-small);
  bottom: 1rem;
  right: 1rem;
`;

const ButtonWrapper = styled.div`
  position: absolute;
  top: 1rem;
  right: 1rem;
`;
