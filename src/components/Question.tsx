import {
  Card,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
} from '@mui/material';

import SyntaxHighlighter from 'react-syntax-highlighter';
import { gradientDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';

import {
  usePuntuationSelector,
  useQuestionsSelector,
  useConfigSelector,
} from '../store';

import { type Question as IQuestion } from '../types';
import { getOptionBackground } from '../helpers';

import { Footer } from './Footer';

export const Question = ({ info }: { info: IQuestion }): JSX.Element => {
  const { selectAnswer } = useQuestionsSelector();
  const { updatePuntuation } = usePuntuationSelector();
  const { questionPuntuation } = useConfigSelector();

  const createHandleClick = (answerIndex: number) => () =>
    selectAnswer(info.id, answerIndex, () =>
      updatePuntuation(questionPuntuation)
    );

  return (
    <>
      <Card
        variant='outlined'
        sx={{
          padding: '1rem',
        }}
      >
        <Typography variant='body1' component='p'>
          {info.question}
        </Typography>
        <SyntaxHighlighter
          language='javascript'
          style={gradientDark}
          customStyle={{
            borderRadius: '4px',
          }}
        >
          {info.code}
        </SyntaxHighlighter>
        <List>
          {info.answers.map((answer, index) => {
            return (
              <ListItem key={'option_' + index} disablePadding divider>
                <ListItemButton
                  onClick={createHandleClick(index)}
                  disabled={info.userSelectedAnswer !== undefined}
                  sx={{
                    backgroundColor: getOptionBackground(info, index),
                  }}
                >
                  <ListItemText primary={answer} />
                </ListItemButton>
              </ListItem>
            );
          })}
        </List>
      </Card>

      <Footer />
    </>
  );
};
