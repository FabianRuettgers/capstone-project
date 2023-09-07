import Link from "next/link";
import { styled } from "styled-components";

export default function SearchFormButton() {
  return (
    <StyledLink href={"/movie/search"}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="32"
        viewBox="0 -960 960 960"
        width="32"
      >
        <path d="M450-450H200v-60h250v-250h60v250h250v60H510v250h-60v-250Z" />
      </svg>
      Search Movie
    </StyledLink>
  );
}

const StyledLink = styled(Link)`
  fill: var(--text-color-dark-button);
  color: var(--text-color-dark-button);
  background-color: var(--background-color-highlight-button);
  font-size: var(--header-h3);
  display: flex;
  align-items: center;
  position: fixed;
  right: 0;
  bottom: 12vh;

  border-radius: var(--border-radius-medium);
  padding: var(--padding-small);
  margin: var(--margin-medium);
  &:active {
    transform: scale(0.85);
  }
  z-index: 200;
`;
