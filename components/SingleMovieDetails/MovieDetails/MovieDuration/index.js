import styled from "styled-components";

export default function MovieDuration({ movie }) {
  return (
    <StyledFigure>
      <StyledSvg
        xmlns="http://www.w3.org/2000/svg"
        height="24"
        viewBox="0 -960 960 960"
        width="24"
      >
        <path d="M360-840v-80h240v80H360Zm80 440h80v-240h-80v240Zm40 320q-74 0-139.5-28.5T226-186q-49-49-77.5-114.5T120-440q0-74 28.5-139.5T226-694q49-49 114.5-77.5T480-800q62 0 119 20t107 58l56-56 56 56-56 56q38 50 58 107t20 119q0 74-28.5 139.5T734-186q-49 49-114.5 77.5T480-80Zm0-80q116 0 198-82t82-198q0-116-82-198t-198-82q-116 0-198 82t-82 198q0 116 82 198t198 82Zm0-280Z" />
      </StyledSvg>
      <Heading>Duration</Heading>
      <Content>{`${movie.runtime} min`}</Content>
    </StyledFigure>
  );
}

const StyledFigure = styled.div`
  background-color: var(--background-color-dark-content);
  box-shadow: 0 0 8px var(--shadow-color-dark);
  text-align: center;
  padding: var(--padding-x-small);
  border-radius: var(--border-radius-small);
`;

const Content = styled.p`
  color: var(--text-color-light-content);
  font-size: var(--header-h3);
  font-weight: 600;
`;

const Heading = styled.figcaption`
  color: var(--text-color-lighter-heading);
  font-size: var(--header-h3);
  padding-top: var(--padding-xx-small);
  padding-bottom: var(--padding-xx-small);
`;

const StyledSvg = styled.svg`
  fill: var(--text-color-light-content);
`;
