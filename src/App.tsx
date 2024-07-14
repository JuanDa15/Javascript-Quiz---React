import { Container, Stack, Typography } from '@mui/material';
import { JavaScriptLogo } from './icons';
import { Start, Game, SettingsFab } from './components';
import { useQuestionsSelector } from './store';

function App() {
  const { questions } = useQuestionsSelector();

  const gameStatus = questions.length > 0 ? 'in-game' : 'stand-by';

  return (
    <main style={{ minHeight: '100vh' }}>
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

        {gameStatus === 'stand-by' ? (
          <Stack
            direction='row'
            gap={2}
            justifyContent='center'
            alignItems='center'
            sx={{ marginTop: '1rem' }}
          >
            <Start />
            <SettingsFab />
          </Stack>
        ) : (
          <Game />
        )}
      </Container>
    </main>
  );
}

export default App;
