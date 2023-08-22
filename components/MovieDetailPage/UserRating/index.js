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
  margin-top: var(--margin-small);
  margin-inline: var(--margin-medium);
`;
