import { styled } from "styled-components";

export default function QuizHomePage({ handleStartQuiz }) {
  return (
    <Main>
      <Heading>Movie-Trivia</Heading>
      <Tagline>Test your movie knowledge with 15 random Questions</Tagline>
      <Button onClick={handleStartQuiz}>Start Quiz</Button>
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
