import { styled } from "styled-components";

export default function DeleteButton({ handleDeleteButtonClick }) {
  return (
    <>
      <StyledButton
        aria-label="Delete button"
        onClick={handleDeleteButtonClick}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="48"
          viewBox="0 -960 960 960"
          width="48"
        >
          <path d="M261-120q-24 0-42-18t-18-42v-570h-41v-60h188v-30h264v30h188v60h-41v570q0 24-18 42t-42 18H261Zm106-146h60v-399h-60v399Zm166 0h60v-399h-60v399Z" />
        </svg>
        Bewertung löschen
      </StyledButton>
    </>
  );
}

const StyledButton = styled.button`
  fill: var(--text-color-dark);
  color: var(--text-color-dark);
  background-color: var(--primary-color);
  box-shadow: 0 0 12px var(--shadow-color-dark);
  font-size: x-large;
  border-radius: var(--border-radius-small);
  display: flex;
  align-items: center;
  padding: var(--padding-small);
  margin-top: 2rem;
  margin-bottom: 2rem;
  &:active {
    transform: scale(0.85);
  }
`;
