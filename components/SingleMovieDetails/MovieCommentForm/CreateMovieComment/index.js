import FormButton from "@/components/Buttons/FormButton";
import styled from "styled-components";

export default function CreateMovieComment({
  id,
  handleCommentButtonClick,
  handleComment,
}) {
  return (
    <>
      <StyledButton onClick={handleCommentButtonClick} />
      <Container>
        <Heading>Comment</Heading>
        <Form onSubmit={handleComment(id)}>
          <StyledInput type="text" placeholder="Autor" name="author" required />
          <StyledTextarea
            placeholder="Comment"
            name="comment"
            rows="6"
            required
          />
          <ButtonWrapper>
            <FormButton
              title={"cancel"}
              backgroundcolor={"var(--background-color-light)"}
              textcolor={"var( --text-color-dark-content)"}
              handleClick={handleCommentButtonClick}
            />
            <FormButton
              type={"submit"}
              title={"save"}
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

const Form = styled.form`
  width: 100%;
  max-width: calc(414px - 4rem);
  display: grid;
  gap: var(--gap-medium);
`;

const StyledInput = styled.input`
  color: var(--text-color-dark-content);
  padding: var(--padding-small);
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
