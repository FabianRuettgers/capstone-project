import { styled } from "styled-components";

export default function Header() {
  return (
    <StyledHeader>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="48"
        viewBox="0 -960 960 960"
        width="48"
      >
        <path d="m140-800 74 152h130l-74-152h89l74 152h130l-74-152h89l74 152h130l-74-152h112q24 0 42 18t18 42v520q0 24-18 42t-42 18H140q-24 0-42-18t-18-42v-520q0-24 18-42t42-18Zm0 212v368h680v-368H140Zm0 0v368-368Z" />
      </svg>
      <h1>Cinematrix</h1>
    </StyledHeader>
  );
}

const StyledHeader = styled.header`
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
  z-index: 1000;
`;
