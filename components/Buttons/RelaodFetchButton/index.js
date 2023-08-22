import React from "react";
import { useRouter } from "next/router";
import { styled } from "styled-components";

export default function ReloadFetchButton() {
  const router = useRouter();
  function handleReload() {
    router.reload();
  }

  return (
    <StyledButton onClick={handleReload} aria-label="Reload content button">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="32"
        viewBox="0 -960 960 960"
        width="32"
      >
        <path d="M480-160q-133 0-226.5-93.5T160-480q0-133 93.5-226.5T480-800q85 0 149 34.5T740-671v-129h60v254H546v-60h168q-38-60-97-97t-137-37q-109 0-184.5 75.5T220-480q0 109 75.5 184.5T480-220q83 0 152-47.5T728-393h62q-29 105-115 169t-195 64Z" />
      </svg>
    </StyledButton>
  );
}

const StyledButton = styled.button`
  background-color: var(--background-color-highlight-button);
  fill: var(--text-color-dark-button);
  padding: var(--padding-xx-small);
  border-radius: 50%;
  &:active {
    transform: scale(0.85);
  }
`;
