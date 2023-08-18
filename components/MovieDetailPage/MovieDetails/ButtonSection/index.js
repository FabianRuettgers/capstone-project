import { styled } from "styled-components";
import BookmarkButton from "../../../Buttons/BookmarkButton";
import RateButton from "@/components/Buttons/RateButton";
import DeleteButton from "@/components/Buttons/Delete Button";

export default function ButtonSection({
  id,
  userInformation,
  handleBookmarkToggle,
  handleRateButtonClick,
  handleDeleteButtonClick,
  startRating,
}) {
  const selectedItem = userInformation.find((item) => item.id === id);
  const isBookmarked = selectedItem ? selectedItem.isBookmarked : false;
  const israted = selectedItem ? selectedItem.rating : false;
  return (
    <SectionContainer>
      {israted ? null : (
        <BookmarkButton
          isBookmarked={isBookmarked}
          handleBookmarkToggle={handleBookmarkToggle}
          id={id}
          startRating={startRating}
        />
      )}
      {israted ? null : (
        <RateButton
          handleRateButtonClick={handleRateButtonClick}
          startRating={startRating}
        />
      )}
      {israted ? (
        <DeleteButton handleDeleteButtonClick={handleDeleteButtonClick} />
      ) : null}
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
