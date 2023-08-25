import { styled } from "styled-components";
import BookmarkButton from "../../../Buttons/BookmarkButton";
import RateButton from "@/components/Buttons/RateButton";
import DeleteButton from "@/components/Buttons/DeleteButton";

export default function ButtonSection({
  id,
  userInformation,
  currentAction,
  handleBookmarkToggle,
  handleRateButtonClick,
  handleDeleteButtonClick,
}) {
  const selectedItem = userInformation.find((item) => item.id === id);
  const isBookmarked = selectedItem ? selectedItem.isBookmarked : false;
  const israted = selectedItem ? selectedItem.rating : false;
  return (
    <SectionContainer>
      <BookmarkSection>
        {israted ? (
          <StyledSvg
            xmlns="http://www.w3.org/2000/svg"
            height="48"
            viewBox="0 -960 960 960"
            width="48"
          >
            <path d="M378-246 154-470l43-43 181 181 384-384 43 43-427 427Z" />
          </StyledSvg>
        ) : (
          <BookmarkButton
            id={id}
            isBookmarked={isBookmarked}
            handleBookmarkToggle={handleBookmarkToggle}
          />
        )}
      </BookmarkSection>
      <RateSection>
        {israted ? null : (
          <RateButton handleRateButtonClick={handleRateButtonClick} />
        )}
      </RateSection>
      {israted ? (
        <DeleteButton handleDeleteButtonClick={handleDeleteButtonClick} />
      ) : null}
    </SectionContainer>
  );
}
const SectionContainer = styled.section`
  border-top: 2px solid var(--highlight-color);
  border-bottom: 2px solid var(--highlight-color);
  margin-top: var(--margin-medium);

  margin-inline: var(--margin-medium);
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const BookmarkSection = styled.section`
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
`;

const RateSection = styled.section`
  position: absolute;
  top: calc(100vh + 2rem);
  right: 2rem;
`;

const StyledSvg = styled.svg`
  fill: var(--text-color-light-heading);
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
`;
