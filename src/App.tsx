import { Container, Stack, Typography } from '@mui/material';
import { JavaScriptLogo } from './icons/JavaScriptLogo';
import Start from './Start';

function App() {
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
        <Start />
      </Container>
    </main>
  );
}

export default App;
