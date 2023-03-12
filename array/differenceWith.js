// 按照给定函数逻辑筛选需要对比差异的数组，查找出前者数组在后者数组中不存在元素
const filter = (arr, fn) => arr.filter(fn)

const findIndex = (arr, fn) => arr.findIndex(fn)

const compare = (a, b) => a.name === b.name;

const differenceWith = (a, b, compare) => filter(a, x => findIndex(b, y => compare(x, y)) === -1)

const arr = [{
    id: 1,
    name: 'Mr Chen',
  },
  {
    id: 2,
    name: 'Mr Lee',
  },
  {
    id: 3,
    name: 'Mr Wang',
  },
];

const arr1 = [{
    name: 'Mr Lee',
    age: 18,
  },
  {
    name: 'Mr Xie',
    age: 20,
  },
  {
    name: 'Mr Liu',
    age: 22,
  },
];

const res = differenceWith(arr, arr1, compare);

console.log(res)