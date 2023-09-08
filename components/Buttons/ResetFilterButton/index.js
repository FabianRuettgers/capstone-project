import styled from "styled-components";

export default function ResetFilterButton({ onClick }) {
  return (
    <StyledButton
      onClick={onClick}
      type="button"
      aria-label="reset filter Button"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="24"
        viewBox="0 -960 960 960"
        width="24"
      >
        <path d="M261-120q-24.75 0-42.375-17.625T201-180v-570h-41v-60h188v-30h264v30h188v60h-41v570q0 24-18 42t-42 18H261Zm438-630H261v570h438v-570ZM367-266h60v-399h-60v399Zm166 0h60v-399h-60v399ZM261-750v570-570Z" />
      </svg>
    </StyledButton>
  );
}

const StyledButton = styled.button`
  color: var(--text-color-light-button);
  fill: var(--text-color-light-button);
  background-color: var(--color-red);
  height: 3rem;
  width: 3rem;
  border-radius: 50%;
  &:active {
    transform: scale(0.85);
  }
  padding: var(--padding-xx-small);
  z-index: 2;
`;
