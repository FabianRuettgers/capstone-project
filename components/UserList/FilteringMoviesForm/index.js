import FormButton from "@/components/Buttons/FormButton";
import ResetFilterButton from "@/components/Buttons/ResetFilterButton";
import styled from "styled-components";

export default function FilteringMoviesForm({
  handleFilterButtonClick,
  handleFiltering,
  handleResetFilter,
}) {
  return (
    <>
      <StyledButton onClick={handleFilterButtonClick} />
      <Container>
        <Heading>Filter Rating</Heading>
        <Form onSubmit={handleFiltering}>
          <StyledLabel>Movies with a minimum rate of</StyledLabel>

          <StyledInput
            type="number"
            min="0"
            max="10"
            step="0.1"
            placeholder="rating"
            name="rating"
            required
          />

          <ButtonWrapper>
            <ResetFilterButton onClick={handleResetFilter} />
            <FormButton
              type={"submit"}
              title={"anwenden"}
              backgroundcolor={"var(--background-color-highlight-button)"}
              textcolor={"var( --text-color-dark-content)"}
            />
          </ButtonWrapper>
        </Form>
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

const Form = styled.form`
  display: grid;
  gap: var(--gap-medium);
`;

const StyledLabel = styled.label`
  color: var(--text-color-light-heading);
  font-size: var(--header-h2);
  text-align: center;
`;

const StyledInput = styled.input`
  color: var(--text-color-dark-content);
  text-align: center;
  height: 4rem;
  width: 40%;
  border-radius: var(--border-radius-small);
  margin-right: auto;
  margin-left: auto;
`;

const ButtonWrapper = styled.div`
  display: flex;
  gap: 2.1rem;
`;
