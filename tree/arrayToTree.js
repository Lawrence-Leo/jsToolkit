// const list = [
//   { id: '04', name: '豪迈线', pid: '01' },
//   { id: '01', name: '定制一厂', pid: '' },
//   { id: '05', name: '星辉线', pid: '02' },
//   { id: '06', name: '贴边', pid: '04' },
//   { id: '07', name: '喷漆', pid: '04' },
//   { id: '08', name: 'IMA线', pid: '03' },
//   { id: '02', name: '定制二厂', pid: '' },
//   { id: '09', name: '贴边子工序1', pid: '06' },
//   { id: '10', name: '贴边子工序2', pid: '06' },
//   { id: '11', name: '喷漆子工序', pid: '07' },
//   { id: '03', name: '定制门板厂', pid: '' },
// ];

const arrayToTree = (arr, pid = '') => {
  let res = [];
  arr.forEach(item => {
    if (item.pid == pid) {
      let children = arrayToTree(arr, item.id);
      children.length && (item.children = children);
      res.push(item);
    }
  });
  return res;
};

const array2Tree = arr => {
  const mapper = {};
  const treeList = [];
  arr.forEach(item => (mapper[item.id] = item));
  arr.forEach(item => {
    const parentNode = mapper[item.pid];
    if (parentNode) {
      if (parentNode.children) {
        parentNode.children.push(item);
      } else {
        parentNode.children = [item];
      }
    } else {
      treeList.push(item);
    }
  });
};
