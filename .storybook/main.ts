module.exports = {
  // core: {
  //   builder: "webpack5",
  // },
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-storysource',
    '@storybook/addon-viewport',
    '@panosvoudouris/addon-versions/register'
  ],
  typescript: { reactDocgen: 'react-docgen' },
};
