import { Button, Stack } from '@mui/material';

export default function Start(): JSX.Element {
  return (
    <Stack
      direction='row'
      justifyItems='center'
      alignItems='center'
      style={{ marginTop: '1rem' }}
    >
      <Button
        onClick={() => {}}
        variant='contained'
        style={{ margin: '0 auto' }}
      >
        ¡Start!
      </Button>
    </Stack>
  );
}
