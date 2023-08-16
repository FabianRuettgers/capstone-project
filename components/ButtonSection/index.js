import { styled } from "styled-components";
import BookmarkButton from "../Buttons/BookmarkButton";
import RateButton from "../Buttons/RateButton";

export default function ButtonSection({
  id,
  bookmarkedMovies,
  handleBookmarkToggle,
}) {
  const isBookmarked = (bookmarkedMovies && bookmarkedMovies[id]) || false;

  return (
    <SectionContainer>
      <BookmarkButton
        isBookmarked={isBookmarked}
        handleBookmarkToggle={handleBookmarkToggle}
        id={id}
      />
      <RateButton />
    </SectionContainer>
  );
}
const SectionContainer = styled.section`
  margin-bottom: 2rem;
  border-bottom: 2px solid var(--highlight-color);
  padding-bottom: 2rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
