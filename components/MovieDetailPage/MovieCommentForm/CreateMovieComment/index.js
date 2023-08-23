import FormButton from "@/components/Buttons/FormButton";
import { styled } from "styled-components";

export default function CreateMovieComment({
  id,
  handleCommentButtonClick,
  handleComment,
}) {
  return (
    <Container>
      <Heading>Kommentar</Heading>
      <Form onSubmit={handleComment(id)}>
        <StyledInput type="text" placeholder="Autor" name="author" required />
        <StyledTextarea
          placeholder="Kommentar"
          name="comment"
          rows="6"
          required
        />
        <ButtonWrapper>
          <FormButton
            title={"zurück"}
            backgroundcolor={"var(--background-color-light)"}
            textcolor={"var( --text-color-dark-content)"}
            handleClick={handleCommentButtonClick}
          />
          <FormButton
            type={"submit"}
            title={"speichern"}
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
  z-index: 1000;
`;

const Heading = styled.h2`
  color: var(--text-color-light-content);
  font-size: var(--header-h1);
`;

const Form = styled.form`
  width: 100%;
  max-width: calc(420px - 4rem);
  display: grid;
  gap: var(--gap-medium);
`;

const StyledInput = styled.input`
  color: var(--text-color-dark-content);
  text-align: center;
  height: 3rem;
  width: 100%;
  border-radius: var(--border-radius-small);
  margin-right: auto;
  margin-left: auto;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const StyledTextarea = styled.textarea`
  width: 100%;
  padding: var(--padding-small);
  border-radius: var(--border-radius-small);
  font-size: var(--big-text);
`;
