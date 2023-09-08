import ProviderList from "./ProviderList";
import styled from "styled-components";

export default function MovieProvider({ movie, handleProviderButtonClick }) {
  return (
    <>
      <StyledButton onClick={handleProviderButtonClick} />
      {movie.results.DE?.flatrate || movie.results.DE?.buy ? (
        <StyledSection>
          {movie.results.DE?.flatrate ? (
            <ProviderList
              heading={"Watch on"}
              providerData={movie.results.DE.flatrate}
            />
          ) : null}
          {movie.results.DE?.buy ? (
            <ProviderList
              heading={"Buy on"}
              providerData={movie.results.DE.buy}
            />
          ) : null}
        </StyledSection>
      ) : null}
    </>
  );
}

const StyledButton = styled.button`
  height: 100vh;
  width: 100vw;
  position: fixed;
  top: 0;
  background-color: black;
  opacity: 0.2;
  z-index: 9999999;
`;

const StyledSection = styled.section`
  max-width: 414px;
  z-index: 99999999;
  display: grid;
  margin: var(--margin-medium);
  padding-inline: var(--padding-small);
  padding-top: var(--padding-medium);

  background-color: var(--background-color);
  box-shadow: 0 0 12px var(--shadow-color-dark);
  border-radius: var(--border-radius-medium);
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(calc(-50% - 2rem), -50%);
  width: calc(414px - 4rem);
`;
