import { Button, Stack, Typography } from '@mui/material';
import { useQuestionsData } from '../hooks';
import { usePuntuationSelector, useQuestionsSelector } from '../store';

export const Footer = (): JSX.Element => {
  const { puntuation, resetPuntuation } = usePuntuationSelector();
  const { correct, incorrect, unanswered } = useQuestionsData();
  const { clearQuestions } = useQuestionsSelector();

  const handleClick = () => {
    clearQuestions();
    resetPuntuation();
  };

  return (
    <footer
      style={{
        marginTop: '1rem',
      }}
    >
      <Typography variant='body2' component='p'>
        Puntuation: {puntuation}
      </Typography>
      <Typography variant='body2' component='p'>
        Correct answers: {correct}
      </Typography>
      <Typography variant='body2' component='p'>
        Incorrect answers: {incorrect}
      </Typography>
      <Typography variant='body2' component='p'>
        Unanswered: {unanswered}
      </Typography>
      <Stack justifyItems='center' alignItems='center'>
        <Button variant='contained' onClick={handleClick}>
          <Typography variant='button' component='span'>
            Reset
          </Typography>
        </Button>
      </Stack>
    </footer>
  );
};
