import styled from "styled-components";

export default function DeleteButton({ handleDeleteButtonClick }) {
  return (
    <>
      <StyledButton
        aria-label="click to delete rating"
        onClick={handleDeleteButtonClick}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="30"
          viewBox="0 -960 960 960"
          width="30"
        >
          <path d="M261-120q-24 0-42-18t-18-42v-570h-41v-60h188v-30h264v30h188v60h-41v570q0 24-18 42t-42 18H261Zm106-146h60v-399h-60v399Zm166 0h60v-399h-60v399Z" />
        </svg>
      </StyledButton>
    </>
  );
}

const StyledButton = styled.button`
  background-color: var(--background-color-dark-content);
  fill: var(--text-color-highlight-button);
  box-shadow: 0 0 2px var(--shadow-color-dark);
  padding: var(--padding-x-small);
  border-radius: 50%;
  &:active {
    transform: scale(0.85);
  }
`;
