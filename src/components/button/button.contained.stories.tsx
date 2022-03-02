import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Delete as DeleteIcon } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core';
import { AddressBook } from '../../icons/fill';
import { Button } from '.';
import { ButtonProps } from './types';

const Template: Story<ButtonProps> = ({
  isLoading,
  disabled,
  startIcon,
  onClick,
  children,
}) => (
  <Button
    variant="contained"
    isLoading={isLoading}
    disabled={disabled}
    startIcon={startIcon}
    onClick={onClick}
  >
    {children}
  </Button>
);

export const Active = Template.bind({});
Active.args = {
  children: 'Active',
};
Active.storyName = 'Стандарт';

export const MainWithIconDelete = Template.bind({});
MainWithIconDelete.args = {
  children: 'Active',
  startIcon: <DeleteIcon style={{ fontSize: 16 }} />,
};
MainWithIconDelete.storyName = 'С иконкой';

export const Loading = Template.bind({});
Loading.args = {
  isLoading: true,
};
Loading.storyName = 'Загрузка';

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
  children: 'Disabled',
};
Disabled.storyName = 'Не активно';

export const All: React.FC = () => {
  const useStoryStyles = makeStyles(() => ({
    root: {
      '& > div': {
        marginBottom: 20,
        '&:not(:last-child)': {
          paddingBottom: 20,
          borderBottom: '1px solid grey',
        },
        '& > *': {
          '&:not(:last-child)': {
            marginRight: 20,
          },
        },
      },
    },
  }));
  const classes = useStoryStyles();

  return (
    <div className={classes.root}>
      <div>
        <Button size="small">Small</Button>
        <Button size="medium">Medium</Button>
        <Button size="large">Large</Button>
      </div>
      <div>
        <Button size="small" isLoading>
          Small
        </Button>
        <Button size="medium" isLoading>
          Medium
        </Button>
        <Button size="large" isLoading>
          Large
        </Button>
      </div>
      <div>
        <Button size="medium" disabled>
          Medium
        </Button>
        <Button startIcon={<AddressBook />}>Start Icon</Button>
        <Button endIcon={<DeleteIcon />}>End Icon</Button>
      </div>
    </div>
  );
};
export default {
  title: 'ReactUI/Button/Contained',
  args: {
    disabled: false,
    isLoading: false,
    startIcon: false,
  },
  argTypes: { onClick: { action: 'clicked' } },
} as Meta;
