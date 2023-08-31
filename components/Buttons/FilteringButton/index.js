import { styled } from "styled-components";

export default function FilteringButton({
  handleFilterButtonClick,
  currentAction,
}) {
  const isActive = currentAction.ratingFilter > 0;
  return (
    <StyledButton onClick={handleFilterButtonClick} isActive={isActive}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="36"
        viewBox="0 -960 960 960"
        width="36"
      >
        <path d="M400-240v-80h160v80H400ZM240-440v-80h480v80H240ZM120-640v-80h720v80H120Z" />
      </svg>
    </StyledButton>
  );
}

const StyledButton = styled.button`
  background-color: transparent;
  fill: ${(props) =>
    props.isActive
      ? "var(--text-color-highlight-button)"
      : "var(--text-color-light-button)"};
  padding-left: var(--padding-small);
  &:active {
    transform: scale(0.85);
  }
`;
