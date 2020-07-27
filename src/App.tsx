import React, { useState } from 'react';
import { fetchQuizQuestions } from './API';
// components
import QuestionCard from './components/QuestionCard/QuestionCard';
// types
import { QuestionState, Difficulty } from './API';
// styled
import { GlobalStyle, Wrapper } from './App.styles';

const TOTAL_QUESTIONS = 10;

export type AnswerObject = {
  question: string;
  answer: string;
  isCorrect: boolean;
  correctAnswer: string;
};

const App = () => {
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState<QuestionState[]>([]);
  const [number, setNumber] = useState(0);
  const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true);
  const [gameHasntStarted, setGameHasntStarted] = useState(true);

  console.log(questions);

  const startTrivia = async () => {
    setLoading(true);
    setGameOver(false);
    setGameHasntStarted(false);

    const newQuestions = await fetchQuizQuestions(
      TOTAL_QUESTIONS,
      Difficulty.EASY,
    );

    setQuestions(newQuestions);
    setScore(0);
    setUserAnswers([]);
    setNumber(0);
    setLoading(false);
  };

  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!gameOver) {
      // user's answer
      const answer = e.currentTarget.value;
      // check the answer against correct answer
      const isCorrect = questions[number].correct_answer === answer;
      // add score if the answer is correct
      if (isCorrect) setScore((prev) => prev + 1);
      // save the answer in the array of user's answers
      const answerObj = {
        question: questions[number].question,
        answer,
        isCorrect,
        correctAnswer: questions[number].correct_answer,
      };
      setUserAnswers((prev) => [...prev, answerObj]);
    }
  };

  const nextQuestion = () => {
    // move on to the next question if it's not the last one
    const nextQuestion = number + 1; // number is current question
    if (nextQuestion === TOTAL_QUESTIONS) {
      setGameOver(true);
    } else {
      setNumber(nextQuestion);
    }
  };

  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <h1>Quiz!</h1>
        {gameHasntStarted && (
          <button className="start" onClick={startTrivia}>
            <span className="start__text">Start</span>
          </button>
        )}

        {!gameOver && <p className="score">Score: {score}</p>}
        {loading && <p>Loading questions...</p>}
        {!loading && !gameOver && (
          <QuestionCard
            questionNr={number + 1}
            totalQuestions={TOTAL_QUESTIONS}
            question={questions[number].question}
            answers={questions[number].answers}
            userAnswer={userAnswers ? userAnswers[number] : undefined}
            callback={checkAnswer}
          />
        )}
        {!loading &&
          !gameOver &&
          userAnswers.length === number + 1 &&
          number !== TOTAL_QUESTIONS - 1 && (
            <button className="next" onClick={nextQuestion}>
              Next
            </button>
          )}
        {!gameHasntStarted &&
          !loading &&
          (gameOver || userAnswers.length === TOTAL_QUESTIONS) && (
            <button className="start" onClick={startTrivia}>
              <span className="start__text">Restart?</span>
            </button>
          )}
      </Wrapper>
    </>
  );
};

export default App;
