import { styled } from "styled-components";
import BookmarkButton from "../../../Buttons/BookmarkButton";

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
    </SectionContainer>
  );
}
const SectionContainer = styled.section`
  border-bottom: 2px solid var(--highlight-color);
  padding-bottom: 2rem;

  display: flex;
  justify-content: space-around;
  align-items: center;
`;
