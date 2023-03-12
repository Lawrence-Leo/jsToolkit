const options = [{
    value: '1100', // id
    label: '四川省',
    children: [{
        value: '11001',
        label: '成都市',
        children: [{
            value: '110011',
            label: '高新区',
          },
          {
            value: '110012',
            label: '武侯区',
          },
          {
            value: '110013',
            label: '锦江区',
          },
        ],
      },
      {
        value: '1102',
        label: '南充市',
        children: [{
            value: '11021',
            label: '嘉陵区',
            children: [{
                value: '110211',
                label: '火花街道',
              },
              {
                value: '110212',
                label: '凤垭山街道',
              },
            ],
          },
          {
            value: '11022',
            label: '顺庆区',
          },
          {
            value: '11023',
            label: '高坪区',
          },
        ],
      },
    ],
  },
  {
    value: '1101',
    label: '重庆市',
    children: [{
        value: '11011',
        label: '沙坪坝区',
        children: [{
            value: '110111',
            label: '陈家桥',
          },
          {
            value: '110112',
            label: '曾家',
          },
        ],
      },
      {
        value: '11012',
        label: '江北区',
      },
      {
        value: '11013',
        label: '渝中区',
      },
    ],
  },
];

const getCascaderIds = (tree, func, keyField, path = []) => {
  for (const item of tree) {
    path.push(item[keyField]);
    if (func(item)) {
      return path;
    }
    if (item.children?.length) {
      const findChildren = getCascaderIds(item.children, func, keyField, path);
      if (findChildren.length) {
        return findChildren;
      }
    }
    path.pop();
  }
  return [];
};
const find = data => data.value === '110112'
console.log(getCascaderIds(options, find, 'value'));