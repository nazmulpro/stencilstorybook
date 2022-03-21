/*import readme from './readme.md';
export default {
  //title: 'cb-treeview',
  parameters: {
    docs: {
      page: null,
      title: null,
    },
    notes: readme,
  },
};

export const Default = () => {
  const data = [
    {
      id: '1',
      name: 'Category 1',
      parentId: null,
      children: [
        {
          id: 3,
          name: 'Sub Category 1',
          parentId: 1,
          children: [
            {
              id: 2,
              name: 'Sub Sub Category 1',
              parentId: 3,
              children: [
                {
                  id: 8,
                  name: 'Another Category',
                  parentId: 2,
                  children: [],
                },
              ],
            },
          ],
        },
        {
          id: 4,
          name: 'Sub Category 2',
          parentId: 1,
          children: [],
        },
      ],
    },
    {
      id: 5,
      name: 'Cat 3',
      parentId: 6,
      children: [],
    },
  ];

  //console.log('Initial Data' + JSON.stringify(data));
  // return `<cb-treeview data-source='[{"id": "5","name": "Cat 3","parentId": "6","children": []}]'></cb-treeview>`;
  return `<cb-treeview data-source='${JSON.stringify(data)}'></cb-treeview>`;
}; */

export default {
  title: 'Components/tree',
};

const Template = args => `<cb-treeview data-source="${args.data}"></cb-treeview>`;

export const Tree = Template.bind({});
Tree.args = {
  data: [
    {
      id: 1,
      name: 'Category 1',
      parentId: null,
      children: [
        {
          id: 3,
          name: 'Sub Category 1',
          parentId: 1,
          children: [
            {
              id: 2,
              name: 'Sub Sub Category 1',
              parentId: 3,
              children: [
                {
                  id: 8,
                  name: 'Another Category',
                  parentId: 2,
                  children: [],
                },
              ],
            },
          ],
        },
        {
          id: 4,
          name: 'Sub Category 2',
          parentId: 1,
          children: [],
        },
      ],
    },
    {
      id: 5,
      name: 'Cat 3',
      parentId: 6,
      children: [],
    },
  ],
};
