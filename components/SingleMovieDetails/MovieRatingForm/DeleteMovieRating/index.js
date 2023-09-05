import FormButton from "@/components/Buttons/FormButton";
import { styled } from "styled-components";

export default function DeleteMovieRating({
  id,
  handleDelete,
  handleGoBackDelete,
}) {
  return (
    <>
      <StyledButton onClick={handleGoBackDelete} />
      <Container>
        <Heading>Bewertung löschen?</Heading>
        <GridWrapper>
          <StyledLabel>
            sicher das du deine Bewertung löschen willst?
          </StyledLabel>
          <ButtonWrapper>
            <FormButton
              title={"zurück"}
              backgroundcolor={"var(--background-color-light)"}
              textcolor={"var( --text-color-dark-content)"}
              handleClick={handleGoBackDelete}
            />
            <FormButton
              title={"löschen"}
              backgroundcolor={"var(--highlight-color)"}
              textcolor={"var( --text-color-dark-content)"}
              handleClick={() => handleDelete(id)}
            />
          </ButtonWrapper>
        </GridWrapper>
      </Container>
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
  z-index: 99999999;
`;

const Container = styled.section`
  color: var(--text-color-light-heading);
  fill: var(--text-color-light-heading);
  background-color: var(--background-color-dark-content);
  box-shadow: 0 0 28px var(--shadow-color-dark);
  width: 100%;
  position: fixed;
  bottom: 0;
  display: grid;
  justify-items: center;
  align-items: center;
  padding: var(--padding-medium);
  gap: var(--gap-small);
  z-index: 999999999;
`;

const Heading = styled.h2`
  color: var(--text-color-light-content);
  font-size: var(--header-h1);
`;

const GridWrapper = styled.div`
  display: grid;
  width: 100%;
  max-width: calc(414px - 4rem);
  gap: var(--gap-medium);
`;

const StyledLabel = styled.h3`
  color: var(--text-color-light-heading);
  font-size: var(--header-h2);
  text-align: center;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-around;
`;
