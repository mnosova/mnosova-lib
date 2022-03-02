import React, { useRef } from 'react';
import { Meta } from '@storybook/react';
import { Delete as DeleteIcon } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core';
import { UiTheme } from '../../theme';
import { Button } from ".";
import { AddressBook } from '../../icons/fill';

export const AllButtons: React.FC = () => {
  const useStoryStyles = makeStyles<UiTheme>((theme) => ({
    root: {
      '& > div': {
        marginBottom: 20,
        '& > h1': {
          ...theme.typography.body1semibold,
          color: theme.uiPalette.text.secondary
        },
        '&:not(:last-child)': {
          paddingBottom: 20,
          borderBottom: '1px solid grey'
        },
        '& > *': {
          '&:not(:last-child)': {
            marginRight: 20
          }
        }
      }
    },
  }));
  const classes = useStoryStyles();

  const buttonRef = useRef<HTMLButtonElement>(null);

  const handleClick = () => {};

  return (
    <div className={classes.root}>
      <div>
        <h1>Contained</h1>
        <Button size="small">Small</Button>
        <Button size="medium" onClick={handleClick} ref={buttonRef}>Medium</Button>
        <Button size="large">Large</Button>
        <Button size="small" isLoading>Small</Button>
        <Button size="medium" isLoading>Medium</Button>
        <Button size="large" onClick={handleClick} isLoading>Large</Button>
        <Button size="medium" disabled>Medium</Button>
        <Button startIcon={<AddressBook />}>Start Icon</Button>
        <Button endIcon={<DeleteIcon />}>End Icon</Button>
      </div>
      <div>
        <h1>Outlined</h1>
        <Button size="small" variant="outlined">Small</Button>
        <Button size="medium" variant="outlined">Medium</Button>
        <Button size="large" variant="outlined">Large</Button>
        <Button size="small" variant="outlined" isLoading>Small</Button>
        <Button size="medium" variant="outlined" isLoading>Medium</Button>
        <Button size="large" variant="outlined" isLoading>Large</Button>
        <Button size="medium" variant="outlined" disabled>Medium</Button>
        <Button
          variant="outlined"
          startIcon={<AddressBook />}
        >
          Start Icon
        </Button>
        <Button
          variant="outlined"
          endIcon={<DeleteIcon />}
        >
          End Icon
        </Button>
      </div>
      <div>
        <h1>Text</h1>
        <Button size="small" variant="text">Small</Button>
        <Button size="medium" variant="text">Medium</Button>
        <Button size="large" variant="text">Large</Button>
        <Button size="small" variant="text" isLoading>Small</Button>
        <Button size="medium" variant="text" isLoading>Medium</Button>
        <Button size="large" variant="text" isLoading>Large</Button>
        <Button size="medium" variant="text" disabled>Medium</Button>
        <Button
          variant="text"
          startIcon={<AddressBook />}
        >
          Start Icon
        </Button>
        <Button
          variant="text"
          endIcon={<DeleteIcon />}
        >
          End Icon
        </Button>
      </div>
      <div>
        <h1>Outlined Grey</h1>
        <Button color="grey" size="small" variant="outlined">Small</Button>
        <Button color="grey" size="medium" variant="outlined">Medium</Button>
        <Button color="grey" size="large" variant="outlined">Large</Button>
        <Button color="grey" size="small" variant="outlined" isLoading>Small</Button>
        <Button color="grey" size="medium" variant="outlined" isLoading>Medium</Button>
        <Button color="grey" size="large" variant="outlined" isLoading>Large</Button>
        <Button color="grey" size="medium" variant="outlined" disabled>Medium</Button>
        <Button
          color="grey"
          variant="outlined"
          startIcon={<AddressBook />}
        >
          Start Icon
        </Button>
        <Button
          color="grey"
          variant="outlined"
          endIcon={<DeleteIcon />}
        >
          End Icon
        </Button>
      </div>
      <div>
        <h1>Text Grey</h1>
        <Button color="grey" size="small" variant="text">Small</Button>
        <Button color="grey" size="medium" variant="text">Medium</Button>
        <Button color="grey" size="large" variant="text">Large</Button>
        <Button color="grey" size="small" variant="text" isLoading>Small</Button>
        <Button color="grey" size="medium" variant="text" isLoading>Medium</Button>
        <Button color="grey" size="large" variant="text" isLoading>Large</Button>
        <Button color="grey" size="medium" variant="text" disabled>Medium</Button>
        <Button
          color="grey"
          variant="text"
          startIcon={<AddressBook />}
        >
          Start Icon
        </Button>
        <Button
          color="grey"
          variant="text"
          endIcon={<DeleteIcon />}
        >
          End Icon
        </Button>
      </div>
    </div>
  );
};

export default {
  title: 'ReactUI/Button',
} as Meta;
