import React from 'react';
import { Story, Meta } from '@storybook/react';
import { makeStyles } from '@material-ui/core';
import { Delete as DeleteIcon } from '@material-ui/icons';
import { ButtonProps } from './types';
import { Button } from '.';
import { AddressBook } from '../../icons/fill';

const Template: Story<ButtonProps> = ({
  isLoading,
  disabled,
  startIcon,
  onClick,
  children,
}) => (
  <Button
    variant="text"
    disabled={disabled}
    isLoading={isLoading}
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
        <Button variant="text" size="small">
          Small
        </Button>
        <Button variant="text" size="medium">
          Medium
        </Button>
        <Button variant="text" size="large">
          Large
        </Button>
      </div>
      <div>
        <Button variant="text" size="small" isLoading>
          Small
        </Button>
        <Button variant="text" size="medium" isLoading>
          Medium
        </Button>
        <Button variant="text" size="large" isLoading>
          Large
        </Button>
      </div>
      <div>
        <Button variant="text" size="medium" disabled>
          Medium
        </Button>
        <Button variant="text" startIcon={<DeleteIcon />}>
          Start Icon
        </Button>
        <Button variant="text" endIcon={<AddressBook />}>
          End Icon
        </Button>
      </div>
    </div>
  );
};

export default {
  title: 'ReactUI/Button/Text',
  args: {
    disabled: false,
    startIcon: false,
  },
  argTypes: { onClick: { action: 'clicked' } },
} as Meta;
