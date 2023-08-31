import Image from "next/image";
import { styled } from "styled-components";

export default function MovieActors({ credits }) {
  const cast = credits.cast.filter(
    (castMember) => castMember.profile_path !== null
  );
  return (
    <>
      {cast.length !== 0 ? (
        <StyledSection>
          <List>
            {cast.map((castMember) => (
              <StyledListItem key={castMember.cast_id}>
                <ImageContainer>
                  <StyledImage
                    alt={castMember.name}
                    src={`https://image.tmdb.org/t/p/w500${castMember.profile_path}`}
                    layout="fill"
                    objectFit="contain"
                    loading="lazy"
                  />
                </ImageContainer>
                <HeadingH2>{castMember.name}</HeadingH2>
                <HeadingH3>{castMember.character}</HeadingH3>
              </StyledListItem>
            ))}
          </List>
        </StyledSection>
      ) : null}
    </>
  );
}

const StyledSection = styled.section`
  width: 311px;
  margin-inline: var(--margin-medium);
  margin-top: var(--margin-medium);
`;
const List = styled.ul`
  color: var(--text-color-light-content);
  display: flex;
  overflow-x: scroll;
  white-space: nowrap;

  &::-webkit-scrollbar {
    width: 10px;
    height: 8px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: var(--text-color-highlight-button);
    border-radius: var(--border-radius-small);
  }
  &::-webkit-scrollbar-track {
    background-color: rgba(0, 0, 0, 0.3);
    opacity: 0.2;
    border-radius: var(--border-radius-small);
  }
`;
const StyledListItem = styled.li`
  display: grid;
  align-items: center;
  justify-items: center;
  margin: 0.5rem;
  border-radius: var(--border-radius-small);
  margin-bottom: 1rem;
  box-shadow: 0 0 8px var(--shadow-color-dark);
`;
const ImageContainer = styled.div`
  height: 150px;
  width: 100px;
  position: relative;
  margin: var(--margin-x-small);
`;

const StyledImage = styled(Image)`
  border-radius: var(--border-radius-small);
`;

const HeadingH2 = styled.h2`
  margin: 5px 1rem;
  font-size: var(--plain-text);
`;
const HeadingH3 = styled.h3`
  margin: 5px 1rem;
  font-size: var(--plain-text);
`;
