// const factoryList = [
//   {
//     id: '1111',
//     name: '定制一厂',
//     childList: [
//       {
//         id: '1111-1',
//         name: 'IMA',
//         childList: [
//           {
//             id: '1111-a',
//             name: '开料',
//           },
//         ],
//       },
//     ],
//   },
//   {
//     id: '2222',
//     name: '定制二厂',
//     childList: [
//       {
//         id: '2222-1',
//         name: '豪迈线',
//         childList: [
//           {
//             id: '2222-a',
//             name: '贴边',
//           },
//         ],
//       },
//       {
//         id: '2222-2',
//         name: '星辉线',
//         childList: [
//           {
//             id: '2222-b',
//             name: '上漆',
//           },
//         ],
//       },
//     ],
//   },
//   {
//     id: '3333',
//     name: '定制三厂',
//     childList: [
//       {
//         id: '333-1',
//         name: 'IMA',
//         childList: [
//           {
//             id: '333-a',
//             name: '开料',
//           },
//         ],
//       },
//     ],
//   },
// ];
// tree 字段转换
const treeFormat = function (list, mapper) {
  const iterator = obj => {
    const newObj = {};
    const { value, label, children } = mapper;
    newObj['value'] = obj[value];
    newObj['label'] = obj[label];
    if (children && obj[children] && obj[children].length > 0) {
      newObj['children'] = obj[children].map(item => iterator(item));
    }
    return newObj;
  };
  const res = list.map(item => iterator(item));
  return res;
};
const mapper = {
  value: 'id',
  label: 'name',
  children: 'childList'
};
console.log(JSON.stringify(treeFormat(factoryList, mapper)));
