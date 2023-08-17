import FormButtom from "@/components/Buttons/FormButton";
import { useState } from "react";
import { styled } from "styled-components";

export default function CreateMovieRating({ id, handleRate }) {
  function handleBack() {}

  return (
    <Container>
      <Heading>Bewerte den Film</Heading>
      <Form onSubmit={handleRate(id)}>
        <StyledLabel>bewerte den Film mit bis zu 10 </StyledLabel>
        <StyledInput
          type="number"
          min="0"
          max="10"
          step="0.1"
          placeholder="rating"
          name="rating"
        />
        <ButtonWrapper>
          <FormButtom
            title={"zurück"}
            backgroundcolor={"var(--background-color-light)"}
            textcolor={"var( --text-color-dark-content)"}
            handleClick={handleBack}
          />
          <FormButtom
            type={"submit"}
            title={"bewerten"}
            backgroundcolor={"var(--highlight-color)"}
            textcolor={"var( --text-color-dark-content)"}
          />
        </ButtonWrapper>
      </Form>
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

const Form = styled.form`
  display: grid;
  gap: var(--gap-medium);
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-around;
`;

const StyledLabel = styled.label`
  color: var(--text-color-light-heading);
  font-size: x-large;
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
