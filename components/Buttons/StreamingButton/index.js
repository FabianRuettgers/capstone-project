import styled from "styled-components";

export default function StreamingkButton({ handleProviderButtonClick }) {
  return (
    <>
      <StyledButton onClick={handleProviderButtonClick}>
        Where to watch?
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 -960 960 960"
          width="24"
        >
          <path d="M480-480Zm320 320H600q0-20-1.5-40t-4.5-40h206v-480H160v46q-20-3-40-4.5T80-680v-40q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160Zm-720 0v-120q50 0 85 35t35 85H80Zm200 0q0-83-58.5-141.5T80-360v-80q117 0 198.5 81.5T360-160h-80Zm160 0q0-75-28.5-140.5t-77-114q-48.5-48.5-114-77T80-520v-80q91 0 171 34.5T391-471q60 60 94.5 140T520-160h-80Z" />
        </svg>
      </StyledButton>
    </>
  );
}

const StyledButton = styled.button`
  background-color: var(--background-color-dark-content);
  fill: var(--text-color-highlight-button);
  color: var(--text-color-highlight-button);
  box-shadow: 0 0 2px var(--shadow-color-dark);
  font-size: var(--header-h3);
  padding: var(--padding-x-small);
  border-radius: var(--border-radius-x-small);
  display: flex;
  justify-content: center;
  align-items: center;
  gap: var(--gap-x-small);
  &:active {
    transform: scale(0.85);
  }
`;
