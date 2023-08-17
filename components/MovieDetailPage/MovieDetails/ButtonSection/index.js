import { styled } from "styled-components";
import BookmarkButton from "../../../Buttons/BookmarkButton";

export default function ButtonSection({
  id,
  userInformation,
  handleBookmarkToggle,
}) {
  const selectedItem = userInformation.find((item) => item.id === id);

  const isBookmarked = selectedItem ? selectedItem.isBookmarked : false;

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
