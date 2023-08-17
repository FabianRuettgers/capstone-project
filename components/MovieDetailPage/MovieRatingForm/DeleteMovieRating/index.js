import FormButtom from "@/components/Buttons/FormButton";
import { styled } from "styled-components";

export default function DeleteMovieRating({
  id,
  handleDelete,
  handleGoBackDelete,
}) {
  return (
    <Container>
      <Heading>Bewertung löschen?</Heading>
      <GridWrapper>
        <StyledLabel>sicher das du deine Bewertung löschen willst?</StyledLabel>
        <ButtonWrapper>
          <FormButtom
            title={"zurück"}
            backgroundcolor={"var(--background-color-light)"}
            textcolor={"var( --text-color-dark-content)"}
            handleClick={handleGoBackDelete}
          />
          <FormButtom
            title={"löschen"}
            backgroundcolor={"var(--highlight-color)"}
            textcolor={"var( --text-color-dark-content)"}
            handleClick={() => handleDelete(id)}
          />
        </ButtonWrapper>
      </GridWrapper>
    </Container>
  );
}

const Container = styled.section`
  color: var(--text-color-light-heading);
  fill: var(--text-color-light-heading);
  background-color: var(--background-color);
  box-shadow: 0 0 28px var(--shadow-color-dark);
  width: 100%;
  position: fixed;
  bottom: 0;
  display: grid;
  justify-items: center;
  align-items: center;
  padding: var(--padding-medium);
  gap: var(--gap-small);
  z-index: 1000;
`;

const GridWrapper = styled.div`
  display: grid;
  gap: var(--gap-medium);
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-around;
`;

const StyledLabel = styled.h3`
  color: var(--text-color-light-heading);
  font-size: x-large;
  font-weight: 400;
  text-align: center;
`;

const Heading = styled.h2`
  color: var(--text-color-light-content);
  font-size: xx-large;
`;

const StyledInput = styled.input`
  color: var(--text-color-dark-content);
  font-weight: 600;
  appearance: none;
  height: 4rem;
  width: 40%;
  border-radius: var(--border-radius-small);
  text-align: center;
  margin-right: auto;
  margin-left: auto;
`;
