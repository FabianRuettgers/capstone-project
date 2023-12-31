import ErrorFetching from "@/components/ErrorHandling/ErrorFetching";
import LoadFetching from "@/components/LoadingHandling/LoadFetching";
import FooterNav from "@/components/Navigation/Footer/FooterNav";
import HeaderNav from "@/components/Navigation/Header/HeaderNav";
import QuizHomePage from "@/components/Quiz/QuizHomePage";
import QuizQuestions from "@/components/Quiz/QuizQuestions";
import QuizResult from "@/components/Quiz/QuizResult";
import Head from "next/head";
import { useEffect, useState } from "react";
import styled from "styled-components";
import useSWR from "swr";

export default function Quiz() {
  const { data, error, isLoading } = useSWR(`/api/quiz`);
  const [quizState, setQuizState] = useState({
    selectedAnswer: null,
    isAnswered: false,
    currentQuestionIndex: 0,
    mixedAnswers: [],
    correctAnswers: 0,
    showResults: false,
    quizStarted: false,
  });

  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  useEffect(() => {
    if (data) {
      const modifiedData = {
        ...data,
        results: data.results.map((result) => ({
          ...result,
          incorrect_answers: result.incorrect_answers.map((answer) =>
            answer
              .replace(/&quot;/g, '"')
              .replace(/&amp;/g, "&")
              .replace(/&#039;/g, "'")
              .replace(/&rsquo;/g, "'")
              .replace(/&ldquo;/g, '"')
              .replace(/&rdquo;/g, '"')
              .replace(/&eacute;/g, "é")
              .replace(/&egrave;/g, "è")
              .replace(/&auml;/g, "ä")
              .replace(/&ouml;/g, "ö")
              .replace(/&uuml;/g, "ü")
              .replace(/&Auml;/g, "Ä")
              .replace(/&Ouml;/g, "Ö")
              .replace(/&Uuml;/g, "Ü")
              .replace(/&szlig;/g, "ß")
              .replace(/&amp;/g, "&")
              .replace(/&lt;/g, "<")
              .replace(/&gt;/g, ">")
              .replace(/&hellip;/g, "…")
              .replace(/&ntilde;/g, "ñ")
              .replace(/&aacute;/g, "á")
          ),
          correct_answer: result.correct_answer
            .replace(/&quot;/g, '"')
            .replace(/&amp;/g, "&")
            .replace(/&#039;/g, "'")
            .replace(/&rsquo;/g, "'")
            .replace(/&ldquo;/g, '"')
            .replace(/&rdquo;/g, '"')
            .replace(/&eacute;/g, "é")
            .replace(/&egrave;/g, "è")
            .replace(/&auml;/g, "ä")
            .replace(/&ouml;/g, "ö")
            .replace(/&uuml;/g, "ü")
            .replace(/&Auml;/g, "Ä")
            .replace(/&Ouml;/g, "Ö")
            .replace(/&Uuml;/g, "Ü")
            .replace(/&szlig;/g, "ß")
            .replace(/&amp;/g, "&")
            .replace(/&lt;/g, "<")
            .replace(/&gt;/g, ">")
            .replace(/&hellip;/g, "…")
            .replace(/&ntilde;/g, "ñ")
            .replace(/&aacute;/g, "á"),
        })),
      };

      const combinedAnswers = [
        ...modifiedData.results[quizState.currentQuestionIndex]
          .incorrect_answers,
        modifiedData.results[quizState.currentQuestionIndex].correct_answer,
      ];
      setQuizState((prevState) => ({
        ...prevState,
        mixedAnswers: shuffleArray(combinedAnswers),
      }));
    }
  }, [data, quizState.currentQuestionIndex]);

  if (isLoading) {
    return (
      <>
        <Head>
          <title>Loading screen</title>
          <meta name="description" content="a Loading-screen" />
        </Head>
        <HeaderNav />
        <MobileViewWrapper>
          <LoadingSection>
            <LoadFetching />
          </LoadingSection>
        </MobileViewWrapper>
        <FooterNav />
      </>
    );
  }

  if (error) {
    return (
      <>
        <Head>
          <title>Error</title>
          <meta name="description" content="a error-screen" />
        </Head>
        <MobileViewWrapper>
          <ErrorFetching />
        </MobileViewWrapper>
      </>
    );
  }

  function handleAnswer(answer) {
    if (quizState.isAnswered) return;
    setQuizState((prevState) => ({
      ...prevState,
      selectedAnswer: answer,
      isAnswered: true,
    }));
    if (
      answer === data.results[quizState.currentQuestionIndex].correct_answer
    ) {
      setQuizState((prevState) => ({
        ...prevState,
        correctAnswers: prevState.correctAnswers + 1,
      }));
    }
  }

  const question = data.results[quizState.currentQuestionIndex].question
    .replace(/&quot;/g, '"')
    .replace(/&amp;/g, "&")
    .replace(/&#039;/g, "'")
    .replace(/&rsquo;/g, "'")
    .replace(/&ldquo;/g, '"')
    .replace(/&rdquo;/g, '"')
    .replace(/&eacute;/g, "é")
    .replace(/&egrave;/g, "è")
    .replace(/&auml;/g, "ä")
    .replace(/&ouml;/g, "ö")
    .replace(/&uuml;/g, "ü")
    .replace(/&Auml;/g, "Ä")
    .replace(/&Ouml;/g, "Ö")
    .replace(/&Uuml;/g, "Ü")
    .replace(/&szlig;/g, "ß")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&hellip;/g, "…")
    .replace(/&ntilde;/g, "ñ")
    .replace(/&aacute;/g, "á");

  function handleNextQuestion() {
    if (quizState.currentQuestionIndex < data.results.length - 1) {
      setQuizState((prevState) => ({
        ...prevState,
        currentQuestionIndex: prevState.currentQuestionIndex + 1,
        isAnswered: false,
        selectedAnswer: null,
      }));
    } else {
      setQuizState((prevState) => ({ ...prevState, showResults: true }));
    }
  }

  function handleStartQuiz() {
    setQuizState((prevState) => ({ ...prevState, quizStarted: true }));
  }

  if (data) {
    return (
      <>
        <Head>
          <title>Movie Quiz</title>
          <meta name="description" content="a random Movie spotlightpage" />
        </Head>
        <HeaderNav />
        <MobileViewWrapper>
          {quizState.quizStarted ? (
            quizState.showResults ? (
              <QuizResult quizState={quizState} data={data} />
            ) : (
              <QuizQuestions
                quizState={quizState}
                handleNextQuestion={handleNextQuestion}
                data={data}
                question={question}
                handleAnswer={handleAnswer}
              />
            )
          ) : (
            <QuizHomePage handleStartQuiz={handleStartQuiz} />
          )}
        </MobileViewWrapper>
        <FooterNav />
      </>
    );
  }
}

const MobileViewWrapper = styled.div`
  max-width: 414px;
  display: grid;
  margin-left: auto;
  margin-right: auto;
`;

const LoadingSection = styled.section`
  height: 100vh;
`;
