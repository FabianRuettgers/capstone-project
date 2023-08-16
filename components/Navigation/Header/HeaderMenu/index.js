import { useRouter } from "next/router";
import { styled } from "styled-components";

export default function HeaderMenu({ title }) {
  const router = useRouter();
  function handleGoBack() {
    router.back();
  }
  return (
    <StyledHeader>
      <StyledButton onClick={handleGoBack}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="48"
          viewBox="0 -960 960 960"
          width="48"
        >
          <path d="M359-242 120-481l239-239 43 43-166 166h604v60H236l166 166-43 43Z" />
        </svg>
      </StyledButton>
      <h1>{title}</h1>
    </StyledHeader>
  );
}

const StyledHeader = styled.header`
  color: var(--text-color-light-heading);
  fill: var(--text-color-light-heading);
  background-color: var(--background-color);
  box-shadow: 0 0 28px var(--shadow-color-dark);
  width: 100%;
  height: 12vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  position: relative;
  top: 0;
  gap: var(--gap-small);
  z-index: 1000;
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
