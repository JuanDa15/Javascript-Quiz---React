import { Settings } from '@mui/icons-material';
import { Dialog, DialogTitle, Fab, Stack, TextField } from '@mui/material';
import { ChangeEventHandler, useState } from 'react';
import { useConfigSelector } from '../store';

export const SettingsFab = (): JSX.Element => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);
  };
  return (
    <>
      <Fab color='primary' aria-label='settings' onClick={handleClick}>
        <Settings />
      </Fab>
      <SettingsDialog open={open} onClose={() => setOpen(false)} />
    </>
  );
};

export const SettingsDialog = ({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}): JSX.Element => {
  const {
    totalQuestions,
    questionPuntuation,
    setQuestionPuntuation,
    setTotalQuestions,
  } = useConfigSelector();

  const createChangeHandler =
    (handler: (value: number) => void): ChangeEventHandler<HTMLInputElement> =>
    (e) => {
      e.preventDefault();
      const { value } = e.target;
      const parsed = parseInt(value);
      handler(parsed);
    };

  return (
    <Dialog onClose={onClose} open={open}>
      <DialogTitle>App Settings</DialogTitle>
      <Stack sx={{ padding: '1rem' }} direction='column' gap={3}>
        <TextField
          variant='outlined'
          label='Number of questions'
          type='number'
          value={totalQuestions}
          onChange={createChangeHandler(setTotalQuestions)}
        />
        <TextField
          variant='outlined'
          label='Question puntuation'
          type='number'
          value={questionPuntuation}
          onChange={createChangeHandler(setQuestionPuntuation)}
        />
      </Stack>
    </Dialog>
  );
};
