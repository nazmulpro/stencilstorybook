export default {
  title: 'Components/cb-dropdown',
};

const Template = args => `<cb-dropdown data-source="${args.data}"></cb-dropdown>`;

export const Filter = Template.bind({});
Filter.args = {
  data: [
    {
      id: 101,
      name: 'JavaScript',
    },
    {
      id: 105,
      name: 'DotNet',
    },
    {
      id: 110,
      name: 'SQL',
    },
    {
      id: 110,
      name: 'Java',
    },
  ],
};
