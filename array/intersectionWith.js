// 取交集
const filter = (arr, fn) => arr.filter(fn)

const findIndex = (arr, fn) => arr.findIndex(fn)

const intersectionWith = (a, b, comp) => filter(a, x => findIndex(b, y => comp(x, y)) !== -1)

const arr = [{
    name: 'Mr Liu',
    age: 20,
  },
  {
    name: 'Mr Chen',
    age: 18,
  },
  {
    name: 'Mr Lee',
    age: 21,
  },
];

const arrs = [{
    id: 1,
    name: 'Mr Zhang',
  },
  {
    id: 2,
    name: 'Mr Lee',
  },
];

const compare = (v, w) => v.name === w.name;

const res = intersectionWith(arr, arrs, compare);

console.log(res);