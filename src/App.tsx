import { Container, Stack, Typography } from '@mui/material';
import { JavaScriptLogo } from './icons/JavaScriptLogo';
import Start from './Start';
import { useQuestionsSelector } from './store/questions';

function App() {
  const { questions } = useQuestionsSelector();

  console.log(questions);
  return (
    <main>
      <Container maxWidth='sm'>
        <Stack
          direction='row'
          gap={2}
          alignItems='center'
          justifyContent='center'
        >
          <JavaScriptLogo />
          <Typography variant='h2' component='h1'>
            <b>Quizz</b>
          </Typography>
        </Stack>

        {questions.length === 0 ? <Start /> : <h1>Quiz</h1>}
      </Container>
    </main>
  );
}

export default App;
