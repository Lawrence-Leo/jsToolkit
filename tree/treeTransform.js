// const factoryList = [
//   {
//     factoryCode: '1111',
//     factoryName: '定制一厂',
//     productLineList: [
//       {
//         lineCode: '1111-1',
//         lineName: 'IMA',
//         processList: [
//           {
//             processCode: '1111-a',
//             processName: '开料',
//           },
//         ],
//       },
//     ],
//   },
//   {
//     factoryCode: '2222',
//     factoryName: '定制二厂',
//     productLineList: [
//       {
//         lineCode: '2222-1',
//         lineName: '豪迈线',
//         processList: [
//           {
//             processCode: '2222-a',
//             processName: '贴边',
//           },
//         ],
//       },
//       {
//         lineCode: '2222-2',
//         lineName: '星辉线',
//         processList: [
//           {
//             processCode: '2222-b',
//             processName: '上漆',
//           },
//         ],
//       },
//     ],
//   },
//   {
//     factoryCode: '3333',
//     factoryName: '定制三厂',
//     productLineList: [
//       {
//         lineCode: '333-1',
//         lineName: 'IMA',
//         processList: [
//           {
//             processCode: '333-a',
//             processName: '开料',
//           },
//         ],
//       },
//     ],
//   },
// ];
// 根据层级的不同对tree进行转换
const treeTransform = function (list, config) {
  const iterator = (obj, deep = 0) => {
    const newObj = {};
    const { value, label, children } = config[deep] || {};
    if (deep === 0) {
      newObj['value'] = obj[value];
      newObj['label'] = obj[label];
    }
    if (deep === 1) {
      newObj['value'] = obj[value];
      newObj['label'] = obj[label];
    }
    if (deep === 2) {
      newObj['value'] = obj[value];
      newObj['label'] = obj[label];
    }
    if (children && obj[children] && obj[children].length > 0) {
      deep = deep + 1;
      newObj['children'] = obj[children].map(item => iterator(item, deep));
    }
    return newObj;
  };
  const res = list.map(item => iterator(item));
  return res;
};
const config = [
  {
    value: 'factoryCode',
    label: 'factoryName',
    children: 'productLineList',
  },
  {
    value: 'lineCode',
    label: 'lineName',
    children: 'processList',
  },
  {
    value: 'processCode',
    label: 'processName',
  },
];
console.log(JSON.stringify(treeTransform(factoryList, config)));
