import styled from "styled-components";
import ReloadFetchButton from "../RelaodFetchButton";

export default function ErrorFetching() {
  return (
    <StyledMain>
      <Container>
        <SvgWrapper>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="48"
            viewBox="0 -960 960 960"
            width="48"
          >
            <path d="m40-120 440-760 440 760H40Zm104-60h672L480-760 144-180Zm340.175-57q12.825 0 21.325-8.675 8.5-8.676 8.5-21.5 0-12.825-8.675-21.325-8.676-8.5-21.5-8.5-12.825 0-21.325 8.675-8.5 8.676-8.5 21.5 0 12.825 8.675 21.325 8.676 8.5 21.5 8.5ZM454-348h60v-224h-60v224Zm26-122Z" />
          </svg>
        </SvgWrapper>
        <TextWrapper>
          <h2>Error!</h2>
          <p>Ein Fehler ist aufgetreten beim laden deiner Daten</p>
          <div>
            <ReloadFetchButton />
          </div>
        </TextWrapper>
      </Container>
    </StyledMain>
  );
}

const StyledMain = styled.main`
  height: 76vh;
  width: 100%;
  margin-top: 12vh;
  margin-bottom: 12vh;
  display: flex;
  justify-content: center;
  text-align: center;
`;

const Container = styled.div`
  display: grid;
  grid-template-rows: 2fr 8fr;
  align-items: center;
  margin: 2rem;
  box-shadow: 0 0 12px var(--shadow-color-dark);
  background-color: var(--lowlight-dark);
  border-radius: 2rem;
`;

const SvgWrapper = styled.div`
  fill: var(--text-color-light);
  display: grid;
  justify-content: center;
  align-items: center;
  width: auto;
  background-color: var(--primary-color);
  height: 100%;
  border-top-right-radius: 2rem;
  border-top-left-radius: 2rem;
`;

const TextWrapper = styled.div`
  color: var(--text-color-light);
  text-align: center;
  padding-left: 2rem;
  padding-right: 2rem;
  display: grid;
  gap: 2rem;
`;
