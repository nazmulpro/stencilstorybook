import readme from './readme.md';
export default {
  title: 'my-component',
  parameters: {
    notes: readme,
  },
};
export const Default = () => {
  const test = 'hoo';
  return `<my-component first=${test} last="Hossain"></my-component>`;
};
