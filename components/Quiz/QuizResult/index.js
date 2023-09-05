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
      <SvgContainer>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="128"
          viewBox="0 -960 960 960"
          width="128"
          className="spin-horizontal"
        >
          <path d="M280-120v-80h160v-124q-49-11-87.5-41.5T296-442q-75-9-125.5-65.5T120-640v-40q0-33 23.5-56.5T200-760h80v-80h400v80h80q33 0 56.5 23.5T840-680v40q0 76-50.5 132.5T664-442q-18 46-56.5 76.5T520-324v124h160v80H280Zm0-408v-152h-80v40q0 38 22 68.5t58 43.5Zm400 0q36-13 58-43.5t22-68.5v-40h-80v152Z" />
        </svg>
      </SvgContainer>
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
  justify-content: center;
  align-items: center;
  align-content: center;
  margin-inline: 2rem;
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

const SvgContainer = styled.div`
  margin-top: 3rem;
  animation: spin 1.75s linear infinite;
  fill: var(--background-color-highlight-content);

  @keyframes spin {
    0% {
      transform: rotateY(0deg);
    }
    100% {
      transform: rotateY(360deg);
    }
  }
`;
