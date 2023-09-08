import styled from "styled-components";

export default function RateButton({ handleRateButtonClick }) {
  return (
    <>
      <StyledButton
        onClick={handleRateButtonClick}
        aria-label="click to rate the movie"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="30"
          viewBox="0 -960 960 960"
          width="30"
        >
          <path d="M80-80v-720q0-33 23.5-56.5T160-880h640q33 0 56.5 23.5T880-800v480q0 33-23.5 56.5T800-240H240L80-80Zm283-310 117-71 117 71-31-133 104-90-137-11-53-126-53 126-137 11 104 90-31 133Z" />
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
