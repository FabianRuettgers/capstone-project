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
        <Heading>Delete rating?</Heading>
        <GridWrapper>
          <StyledLabel>
            are you sure you want to delete your rating?
          </StyledLabel>
          <ButtonWrapper>
            <FormButton
              title={"cancel"}
              backgroundcolor={"var(--background-color-light)"}
              textcolor={"var( --text-color-dark-content)"}
              handleClick={handleGoBackDelete}
            />
            <FormButton
              title={"delete"}
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
  background-color: var(--background-color);
  box-shadow: 0 0 12px var(--shadow-color-dark);
  border-radius: var(--border-radius-medium);
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(calc(-50%), -50%);
  width: calc(414px - 4rem);
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
