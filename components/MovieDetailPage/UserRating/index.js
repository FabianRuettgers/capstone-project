import { styled } from "styled-components";
import RatingItem from "./RatingItem";

export default function UserRating({ rating }) {
  return (
    <StyledSection>
      <RatingItem movieRating={rating} />
    </StyledSection>
  );
}

const StyledSection = styled.section`
  margin-top: 1rem;
  margin-inline: var(--margin-medium);
`;
