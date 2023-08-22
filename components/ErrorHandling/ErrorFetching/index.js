import styled from "styled-components";
import ReloadFetchButton from "../../Buttons/RelaodFetchButton";

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
        <StyledFigure>
          <Heading>Error!</Heading>
          <Content>Ein Fehler ist aufgetreten beim laden deiner Daten</Content>
          <div>
            <ReloadFetchButton />
          </div>
        </StyledFigure>
      </Container>
    </StyledMain>
  );
}
const StyledMain = styled.main`
  height: 76vh;
  width: 100%;
  margin-top: 12vh;
  margin-bottom: 12vh;
  display: grid;
  justify-items: center;
  align-items: center;
`;

const Container = styled.section`
  background-color: var(--background-color-dark-content);
  box-shadow: 0 0 12px var(--shadow-color-dark);
  display: grid;
  align-items: center;
  border-radius: var(--border-radius-medium);
  margin: var(--margin-medium);
`;

const SvgWrapper = styled.div`
  background-color: var(--background-color-highlight-content);
  fill: var(--text-color-light-heading);
  height: 100%;
  display: grid;
  justify-content: center;
  align-items: center;
  border-top-right-radius: var(--border-radius-medium);
  border-top-left-radius: var(--border-radius-medium);
  padding: var(--padding-small);
`;

const StyledFigure = styled.figure`
  text-align: center;
  display: grid;
  gap: var(--gap-medium);
  margin-top: var(--margin-medium);
  margin-bottom: var(--margin-medium);
  padding-right: var(--padding-medium);
  padding-left: var(--padding-medium);
`;

const Heading = styled.figcaption`
  color: var(--text-color-light-heading);
  font-size: var(--header-h1);
`;
const Content = styled.p`
  color: var(--text-color-light-content);
  font-size: var(--big-text);
`;
