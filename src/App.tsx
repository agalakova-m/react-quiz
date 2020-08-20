import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { fetchQuizQuestions } from './API';
// components
import QuestionCard from './components/QuestionCard/QuestionCard';
import Toggle from './components/Toggle/Toggle';
// types
import { QuestionState, Difficulty } from './API';
// styled
import { Wrapper } from './App.styles';
import { lightTheme, darkTheme } from './styles/themes';
import { GlobalStyle } from './styles/globalStyles';

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
  const [theme, setTheme] = useState('light');

  // check user's theme
  // useEffect(() => {
  //   const isDark = matchMedia('(prefers-color-scheme: dark)');

  //   setTheme(isDark.matches ? 'dark' : 'light');

  //   isDark.addListener((event) => {
  //     setTheme(event.matches ? 'dark' : 'light');
  //   });

  //   return () => {
  //     isDark.removeListener();
  //   };
  // }, [theme]);

  // toggle between themes
  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  };

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
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyle />
      <Wrapper>
        <Toggle theme={theme} toggleTheme={toggleTheme} />
        <h1>Quiz!</h1>
        {gameHasntStarted && (
          <button className="start" onClick={startTrivia}>
            Start
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
              Restart?
            </button>
          )}
      </Wrapper>
    </ThemeProvider>
  );
};

export default App;
