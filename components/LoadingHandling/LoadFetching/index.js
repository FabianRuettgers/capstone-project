import { keyframes, styled } from "styled-components";

export default function LoadFetching() {
  return (
    <StyledSection>
      <Spinner>
        <StyledSvg
          xmlns="http://www.w3.org/2000/svg"
          height="48"
          viewBox="0 -960 960 960"
          width="48"
        >
          <path d="M196-331q-20-36-28-72.5t-8-74.5q0-131 94.5-225.5T480-798h43l-80-80 39-39 149 149-149 149-40-40 79-79h-41q-107 0-183.5 76.5T220-478q0 29 5.5 55t13.5 49l-43 43ZM476-40 327-189l149-149 39 39-80 80h45q107 0 183.5-76.5T740-479q0-29-5-55t-15-49l43-43q20 36 28.5 72.5T800-479q0 131-94.5 225.5T480-159h-45l80 80-39 39Z" />
        </StyledSvg>
      </Spinner>
    </StyledSection>
  );
}
const StyledSection = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  justify-items: center;
  align-items: center;
`;

const spinAnimation = keyframes`
 0% { height: 8rem; width: 8rem; }
 100% { rotate:360deg}
`;

const Spinner = styled.div`
  height: 7rem;
  width: 7rem;
  background-color: var(--background-color-highlight-button);
  box-shadow: 0 0 12px var(--shadow-color-dark);
  border-radius: 50%;
  display: grid;
  justify-items: center;
  align-items: center;
  animation-name: ${spinAnimation};
  animation-duration: 1s;
  animation-iteration-count: infinite;
`;

const StyledSvg = styled.svg`
  scale: 1.5;
  fill: var(--text-color-dark-button);
`;
