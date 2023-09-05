import { useRouter } from "next/router";
import { styled } from "styled-components";

export default function QuizResult({ quizState, data }) {
  const router = useRouter();
  function handleReload() {
    router.reload();
  }
  return (
    <Main>
      <Heading>Trivia Results</Heading>
      <Tagline>
        You answered {quizState.correctAnswers} out of {data.results.length}{" "}
        questions correctly.
      </Tagline>
      <Button onClick={handleReload}>Back to Start</Button>
    </Main>
  );
}
const Main = styled.main`
  display: grid;
  text-align: center;
`;
const Heading = styled.h2`
  font-size: var(--header-h1);
  color: white;
  margin-top: 2rem;
`;
const Tagline = styled.p`
  font-size: var(--header-h2);
  color: white;
  margin-top: 8rem;
`;

const Button = styled.button`
  margin-top: 6rem;
  margin-inline: 7rem;
  padding-top: 1rem;
  padding-bottom: 1rem;
  border-radius: 1rem;
`;
