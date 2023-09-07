import { styled } from "styled-components";

export default function BookmarkButton({
  isBookmarked,
  handleBookmarkToggle,
  id,
}) {
  return (
    <>
      <StyledButton
        onClick={() => handleBookmarkToggle(id)}
        aria-label="click to toggle Bookmark"
      >
        {isBookmarked ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="30"
            viewBox="0 -960 960 960"
            width="30"
          >
            <path d="M200-120v-640q0-33 23.5-56.5T280-840h400q33 0 56.5 23.5T760-760v640L480-240 200-120Z" />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="30"
            viewBox="0 -960 960 960"
            width="30"
          >
            <path d="M200-120v-640q0-33 23.5-56.5T280-840h400q33 0 56.5 23.5T760-760v640L480-240 200-120Zm80-122 200-86 200 86v-518H280v518Zm0-518h400-400Z" />
          </svg>
        )}
      </StyledButton>
    </>
  );
}

const StyledButton = styled.button`
  background-color: var(--background-color-dark-content);
  fill: var(--text-color-highlight-button);
  box-shadow: 0 0 2px var(--shadow-color-dark);
  padding: 0.5rem;
  border-radius: 50%;
  &:active {
    transform: scale(0.85);
  }
`;
