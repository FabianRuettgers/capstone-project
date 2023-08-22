import { styled } from "styled-components";
import RatingItem from "./RatingItem";

export default function MovieRating({ movie }) {
  return (
    <StyledSection>
      <RatingItem movie={movie} />
    </StyledSection>
  );
}

const StyledSection = styled.section`
  margin-top: 1rem;
  margin-inline: var(--margin-medium);
`;
