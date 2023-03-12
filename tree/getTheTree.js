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

const getTheTree = function (list, str) {
  const JSONString = list
    .map(item => JSON.stringify(item))
    .find(item => item.includes(str));
  const obj = JSON.parse(JSONString);
  return obj;
};
// JSON.stringify 处理复杂对象数组
const aa = getTheTree(factoryList, '"2222-a"');
console.log(aa);
