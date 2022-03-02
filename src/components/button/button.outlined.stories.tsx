import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Delete as DeleteIcon } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core';
import { AddressBook } from '../../icons/fill';
import { Button } from '.';
import { ButtonProps } from './types';

const Template: Story<ButtonProps> =  ({
  isLoading,
  disabled,
  startIcon,
  onClick,
  children,
}) => (
  <Button
    variant="outlined"
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

export const ActiveWithIcon = Template.bind({});
ActiveWithIcon.args = {
  children: 'Active',
  startIcon: <DeleteIcon style={{ fontSize: 16 }} />,
};
ActiveWithIcon.storyName = 'С иконкой';

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

export const All: React.FC<{}> = () => {
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
        <Button variant="outlined" size="small">
          Small
        </Button>
        <Button variant="outlined" size="medium">
          Medium
        </Button>
        <Button variant="outlined" size="large">
          Large
        </Button>
      </div>
      <div>
        <Button variant="outlined" size="small" isLoading>
          Small
        </Button>
        <Button variant="outlined" size="medium" isLoading>
          Medium
        </Button>
        <Button variant="outlined" size="large" isLoading>
          Large
        </Button>
      </div>
      <div>
        <Button variant="outlined" size="medium" disabled>
          Medium
        </Button>
        <Button variant="outlined" startIcon={<AddressBook />}>
          Start Icon
        </Button>
        <Button variant="outlined" endIcon={<DeleteIcon />}>
          End Icon
        </Button>
      </div>
    </div>
  );
};

export default {
  title: 'ReactUI/Button/Outlined',
  args: {
    disabled: false,
    isLoading: false,
    startIcon: false,
  },
  argTypes: { onClick: { action: 'clicked' } },
} as Meta;
