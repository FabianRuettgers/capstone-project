import styled from "styled-components";

export default function QuizHomePage({ handleStartQuiz }) {
  return (
    <Main>
      <Heading>Movie-Trivia</Heading>
      <div>
        <Svg
          xmlns="http://www.w3.org/2000/svg"
          height="128"
          viewBox="0 -960 960 960"
          width="128"
        >
          <path d="M160-200q-33 0-56.5-23.5T80-280v-480q0-33 23.5-56.5T160-840l80 160h120l-80-160h80l80 160h120l-80-160h80l80 160h120l-80-160h120q33 0 56.5 23.5T880-760v160H160v320h320v80H160Zm400 40v-85l206-207 86 84-207 208h-85Zm321-236-85-85 28-28q12-12 29-12t28 12l28 29q11 12 11 28.5T909-424l-28 28Z" />
        </Svg>
      </div>
      <Tagline>Test your movie knowledge on 15 random Questions</Tagline>
      <Button onClick={handleStartQuiz}>Start Quiz</Button>
    </Main>
  );
}
const Main = styled.main`
  display: grid;
  text-align: center;
  justify-content: center;
  align-items: center;
  margin-inline: 2rem;
  margin-top: 12vh;
  margin-bottom: 12vh;
`;
const Heading = styled.h2`
  font-size: var(--header-h1);
  color: white;
  margin-top: 2rem;
`;
const Tagline = styled.p`
  font-size: var(--header-h2);
  color: white;
  margin-top: 3rem;
`;

const Button = styled.button`
  margin-top: 3rem;
  margin-inline: 7rem;
  padding-top: 1rem;
  padding-bottom: 1rem;
  border-radius: 1rem;
  &:active {
    transform: scale(0.85);
  }
`;

const Svg = styled.svg`
  margin-top: 3rem;
  fill: var(--background-color-highlight-content);
`;
