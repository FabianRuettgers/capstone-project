import styled from "styled-components";

export default function ExitCommentButton({ onClick }) {
  return (
    <StyledButton onClick={onClick} aria-label="Exit edit Comment Button">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="24"
        viewBox="0 -960 960 960"
        width="24"
      >
        <path d="m249-207-42-42 231-231-231-231 42-42 231 231 231-231 42 42-231 231 231 231-42 42-231-231-231 231Z" />
      </svg>
    </StyledButton>
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
