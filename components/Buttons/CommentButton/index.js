import { styled } from "styled-components";

export default function CommentButton({ handleCommentButtonClick }) {
  return (
    <>
      <StyledButton
        onClick={handleCommentButtonClick}
        aria-label="click button to comment"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="30"
          viewBox="0 -960 960 960"
          width="30"
        >
          <path d="M240-400h98l236-234q6-6 6-15t-6-15l-70-70q-6-6-15-6t-15 6L240-498v98Zm180 0h300v-80H500l-80 80ZM80-80v-720q0-33 23.5-56.5T160-880h640q33 0 56.5 23.5T880-800v480q0 33-23.5 56.5T800-240H240L80-80Zm126-240h594v-480H160v525l46-45Zm-46 0v-480 480Z" />
        </svg>
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
