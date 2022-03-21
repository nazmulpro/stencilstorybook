export default {
  title: 'Components/cb-jsonformatter',
};

const Template = args => `<cb-jsonformatter rows='${args.rows}' cols='${args.cols}' data-source='${args.data}'></cb-jsonformatter>`;

export const JsonFormatter = Template.bind({});
JsonFormatter.args = {
  data: '{"a":1,"b":2,"c":{"d":1,"e":[1,2]}}',
  rows: 15,
  cols: 40,
};
