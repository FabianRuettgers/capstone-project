import { useRouter } from "next/router";
import { styled } from "styled-components";

export default function Header({ title }) {
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
  position: relative;
  color: var(--text-color-light);
  fill: var(--text-color-light);
  background-color: var(--background-color);
  width: 100%;
  height: 12vh;
  top: 0;
  position: fixed;
  display: flex;
  gap: 1rem;
  align-items: center;
  justify-content: center;
  box-shadow: 0 0 28px var(--shadow-color-dark);
`;

const StyledButton = styled.button`
  margin: 0;
  padding: 0.25rem;
  margin-left: 1rem;
  border: none;
  background: none;
  position: absolute;
  left: 0;
  &:active {
    transform: scale(0.85);
  }
`;
