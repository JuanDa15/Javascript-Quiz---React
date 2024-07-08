import { Button, Stack } from '@mui/material';
import { useQuestionsSelector } from './store/questions';

export default function Start(): JSX.Element {
  const { fetchQuestions } = useQuestionsSelector();

  const handleClick = () => {
    fetchQuestions(5);
  };

  return (
    <Stack
      direction='row'
      justifyItems='center'
      alignItems='center'
      style={{ marginTop: '1rem' }}
    >
      <Button
        onClick={handleClick}
        variant='contained'
        style={{ margin: '0 auto' }}
      >
        ¡Start!
      </Button>
    </Stack>
  );
}
