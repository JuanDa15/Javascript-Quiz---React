import { IconButton, Stack, Typography } from '@mui/material';
import { STEPS_TYPE, useQuestionsSelector } from '../store';
import { ArrowBack, ArrowForward } from '@mui/icons-material';
import { Question } from './Question';

export const Game = (): JSX.Element => {
  const { currentQuestion, questions, changeQuestion } = useQuestionsSelector();

  const question = questions[currentQuestion - 1];

  const createHandleNavigation = (step: STEPS_TYPE) => () =>
    changeQuestion(step);

  return (
    <>
      <Stack direction='row' justifyContent='space-between'>
        <IconButton
          onClick={createHandleNavigation('previous')}
          disabled={
            currentQuestion === 1 || question.userSelectedAnswer === undefined
          }
        >
          <ArrowBack />
        </IconButton>
        <Typography variant='h6' component='b'>
          {currentQuestion} / {questions.length}
        </Typography>
        <IconButton
          onClick={createHandleNavigation('next')}
          disabled={
            currentQuestion === questions.length ||
            question.userSelectedAnswer === undefined
          }
        >
          <ArrowForward />
        </IconButton>
      </Stack>
      <Question info={question} />
    </>
  );
};
