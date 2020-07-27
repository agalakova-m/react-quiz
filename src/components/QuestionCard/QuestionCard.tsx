import React from 'react';
// types
import { AnswerObject } from '../../App';
// styles
import { Wrapper, InnerWrapper, ButtonWrapper } from './QuestionCard.styles';

type Props = {
  question: string;
  answers: string[]; // array of strings
  callback: (e: React.MouseEvent<HTMLButtonElement>) => void;
  userAnswer: AnswerObject | undefined;
  questionNr: number;
  totalQuestions: number;
};

const QuestionCard: React.FC<Props> = ({
  question,
  answers,
  callback,
  userAnswer,
  questionNr,
  totalQuestions,
}) => (
  <Wrapper>
    <p className="number">
      Question: {questionNr} / {totalQuestions}
    </p>
    <p className="question" dangerouslySetInnerHTML={{ __html: question }} />
    <InnerWrapper>
      {answers.map((answer) => (
        <ButtonWrapper
          key={answer}
          correct={userAnswer?.correctAnswer === answer}
          userClicked={userAnswer?.answer === answer}
        >
          <button disabled={!!userAnswer} value={answer} onClick={callback}>
            <span dangerouslySetInnerHTML={{ __html: answer }} />
            <div className="layer">Yeah!</div>
          </button>
        </ButtonWrapper>
      ))}
    </InnerWrapper>
  </Wrapper>
);

export default QuestionCard;