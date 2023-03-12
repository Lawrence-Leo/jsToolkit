// const treeList = [
//   {
//     id: '01',
//     name: '定制一厂',
//     pid: '',
//     children: [
//       {
//         id: '04',
//         name: '豪迈线',
//         pid: '01',
//         children: [
//           {
//             id: '06',
//             name: '贴边',
//             pid: '04',
//             children: [
//               {
//                 id: '09',
//                 name: '贴边子工序1',
//                 pid: '06',
//               },
//               {
//                 id: '10',
//                 name: '贴边子工序2',
//                 pid: '06',
//               },
//             ],
//           },
//           {
//             id: '07',
//             name: '喷漆',
//             pid: '04',
//             children: [
//               {
//                 id: '11',
//                 name: '喷漆子工序',
//                 pid: '07',
//               },
//             ],
//           },
//         ],
//       },
//     ],
//   },
//   {
//     id: '02',
//     name: '定制二厂',
//     pid: '',
//     children: [
//       {
//         id: '05',
//         name: '星辉线',
//         pid: '02',
//       },
//     ],
//   },
//   {
//     id: '03',
//     name: '定制门板厂',
//     pid: '',
//     children: [
//       {
//         id: '08',
//         name: 'IMA线',
//         pid: '03',
//       },
//     ],
//   },
// ];

const treeToArray = (root, getNode) => {
  let list = Array.isArray(root) ? [...root] : [root];
  while (list.length) {
    let node = list.pop();
    getNode && getNode(node);
    let children = node.children;
    if (children && children.length) {
      children.forEach(item => list.push(item));
    }
  }
};

function tree2Array(root, getNode) {
  let list = Array.isArray(root) ? [...root] : [root];
  while (list.length) {
    let node = list.shift();
    getNode && getNode(node);
    let children = node.children;
    if (children && children.length) {
      children.forEach(item => list.push(item));
    }
  }
}
// const list = [];
// tree2Array(treeList, node => list.push(node));
// console.log(list);
