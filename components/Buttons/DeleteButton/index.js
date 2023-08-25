import { styled } from "styled-components";

export default function DeleteButton({
  handleDeleteButtonClick,
  startRating,
  startComment,
  startEditComment,
}) {
  const disableButton = startComment || startRating || startEditComment;
  return (
    <>
      <StyledButton
        aria-label="Delete button"
        onClick={handleDeleteButtonClick}
        disabled={disableButton}
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
  fill: var(--text-color-dark-heading);
  color: var(--text-color-dark-heading);
  background-color: var(--primary-color);
  box-shadow: 0 0 12px var(--shadow-color-dark);
  font-size: var(--header-h2);
  border-radius: var(--border-radius-small);
  display: flex;
  align-items: center;
  &:active {
    transform: scale(0.85);
  }
  padding: var(--padding-small);
  margin-top: var(--margin-medium);
  margin-bottom: var(--margin-medium);
`;
