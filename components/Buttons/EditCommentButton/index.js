import { styled } from "styled-components";

export default function EditCommentButton({
  handleEditClick,
  handleBackClick,
  editMode,
}) {
  console.log(editMode);
  return (
    <>
      {editMode ? (
        <StyledButton onClick={handleBackClick}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24"
            viewBox="0 -960 960 960"
            width="24"
          >
            <path d="m249-207-42-42 231-231-231-231 42-42 231 231 231-231 42 42-231 231 231 231-42 42-231-231-231 231Z" />
          </svg>
        </StyledButton>
      ) : (
        <StyledButton onClick={handleEditClick}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24"
            viewBox="0 -960 960 960"
            width="24"
          >
            <path d="M180-180h44l443-443-44-44-443 443v44Zm614-486L666-794l42-42q17-17 42-17t42 17l44 44q17 17 17 42t-17 42l-42 42Zm-42 42L248-120H120v-128l504-504 128 128Zm-107-21-22-22 44 44-22-22Z" />
          </svg>
        </StyledButton>
      )}
    </>
  );
}

const StyledButton = styled.button`
  position: absolute;
  right: 1rem;
  top: 1rem;
  fill: var(--text-color-dark-button);
  background-color: var(--background-color-highlight-button);
  border-radius: 50%;
  &:active {
    transform: scale(0.85);
  }
  padding: var(--padding-xx-small);
  z-index: 2;
`;
