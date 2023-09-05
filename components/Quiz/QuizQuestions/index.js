import { styled } from "styled-components";

export default function QuizQuestions({
  question,
  quizState,
  handleNextQuestion,
  data,
  handleAnswer,
}) {
  return (
    <Main>
      <Heading>Movie-Trivia</Heading>
      <Tagline>
        Question {quizState.currentQuestionIndex + 1} / {data.results.length}
      </Tagline>
      <Question>{question}</Question>
      <List>
        {quizState.mixedAnswers.map((answer, index) => (
          <Listitem key={index}>
            <AnswerButton
              onClick={() => handleAnswer(answer)}
              correct={
                answer ===
                  data.results[quizState.currentQuestionIndex].correct_answer &&
                quizState.isAnswered
              }
              incorrect={
                answer !==
                  data.results[quizState.currentQuestionIndex].correct_answer &&
                quizState.isAnswered &&
                answer === quizState.selectedAnswer
              }
              selected={answer === quizState.selectedAnswer}
            >
              {answer}
            </AnswerButton>
          </Listitem>
        ))}
      </List>

      <NextButton onClick={handleNextQuestion}>
        {quizState.currentQuestionIndex < data.results.length - 1
          ? "Next Question"
          : "Finish Quiz"}
      </NextButton>
      <Counter>
        Correct Answers: {quizState.correctAnswers} / {data.results.length}
      </Counter>
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
const Tagline = styled.h2`
  font-size: var(--header-h3);
  color: white;
  margin-top: 1rem;
`;
const Question = styled.p`
  font-size: var(--header-h2);
  color: white;
  margin-top: 2rem;
`;
const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  margin-top: 2rem;
`;
const Listitem = styled.li`
  width: 100%;
`;
const Counter = styled.p`
  font-size: var(--header-h2);
  color: white;
  margin-top: 2rem;
`;
const AnswerButton = styled.button`
  width: 100%;
  height: 100%;
  padding-top: 1rem;
  padding-bottom: 1rem;
  border-radius: 1rem;
  background-color: ${(props) => {
    if (props.correct && props.selected) return "green";
    if (props.correct) return props.selected ? "white" : "green";
    if (props.incorrect && props.selected) return "red";
    return props.selected ? "white" : "white";
  }};
  color: ${(props) => (props.correct || props.incorrect ? "white" : "black")};
`;

const NextButton = styled.button`
  margin-top: 6rem;
  margin-inline: 7rem;
  padding-top: 1rem;
  padding-bottom: 1rem;
  border-radius: 1rem;
`;
