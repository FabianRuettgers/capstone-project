import { styled } from "styled-components";

export default function MovieTitle({ movie }) {
  return (
    <StyledSection>
      <Heading>{movie.title}</Heading>
      {movie.tagline !== "" ? <Tagline>{movie.tagline}</Tagline> : null}
    </StyledSection>
  );
}
const StyledSection = styled.section`
  width: 65%;
  margin-left: var(--margin-medium);
`;

const Heading = styled.h1`
  color: var(--text-color-light-heading);
  font-size: var(--header-h2);
  overflow: hidden;
  text-overflow: ellipsis;
  margin-top: var(--margin-medium);
`;

const Tagline = styled.h2`
  color: var(--text-color-light-heading);
  font-size: var(--header-h3);
  opacity: 0.7;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-top: var(--margin-x-small);
`;
