import { useRouter } from "next/router";
import { styled } from "styled-components";

export default function HeaderDetailsPage({ disable }) {
  const router = useRouter();
  function handleGoBackRating() {
    router.back();
  }
  return (
    <StyledHeader>
      <StyledButton
        onClick={handleGoBackRating}
        aria-label="Go back button"
        disabled={disable}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="48"
          viewBox="0 -960 960 960"
          width="48"
        >
          <path d="M359-242 120-481l239-239 43 43-166 166h604v60H236l166 166-43 43Z" />
        </svg>
      </StyledButton>
    </StyledHeader>
  );
}

const StyledHeader = styled.header`
  color: var(--text-color-light-button);
  fill: var(--text-color-light-button);
  background-color: transparent;

  height: 12vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  position: absolute;
  top: 0;
  gap: var(--gap-small);
  z-index: 10;
`;

const StyledButton = styled.button`
  background: none;
  padding: var(--padding-xx-small);
  margin-left: var(--margin-small);
  position: absolute;
  left: 0;
  &:active {
    transform: scale(0.85);
  }
`;
