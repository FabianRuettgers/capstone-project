import { styled } from "styled-components";

export default function RateButton({ handleRateButtonClick, startRating }) {
  return (
    <>
      <StyledButton
        onClick={handleRateButtonClick}
        aria-label="Rate button"
        disabled={startRating}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="48"
          viewBox="0 -960 960 960"
          width="48"
        >
          <path d="m323-205 157-94 157 95-42-178 138-120-182-16-71-168-71 167-182 16 138 120-42 178ZM233-80l65-281L80-550l288-25 112-265 112 265 288 25-218 189 65 281-247-149L233-80Zm247-355Z" />
        </svg>
      </StyledButton>
    </>
  );
}

const StyledButton = styled.button`
  background-color: var(--highlight-color);
  fill: var(--text-color-dark);
  border-radius: 50%;
  padding: var(--padding-x-small);
  &:active {
    transform: scale(0.85);
  }
`;
