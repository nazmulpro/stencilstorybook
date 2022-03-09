module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)', '../src/components/**/*.stories.@(js|jsx|ts|tsx|mdx)'],
  //stories: ['../src/components/**/*.stories.@(js|jsx|ts|tsx|mdx)'],
  addons: ['@storybook/addon-controls', '@storybook/addon-links', '@storybook/addon-essentials', '@storybook/addon-docs'],
  framework: '@storybook/html',
};
