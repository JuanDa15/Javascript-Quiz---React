import { Button, Stack } from '@mui/material';
import { useQuestionsSelector, useConfigSelector } from '../store';

export const Start = (): JSX.Element => {
  const { fetchQuestions } = useQuestionsSelector();
  const { totalQuestions } = useConfigSelector();

  const handleClick = () => {
    fetchQuestions(totalQuestions);
  };

  return (
    <Stack direction='row' justifyItems='center' alignItems='center'>
      <Button
        onClick={handleClick}
        variant='contained'
        style={{ margin: '0 auto' }}
      >
        ¡Start!
      </Button>
    </Stack>
  );
};
