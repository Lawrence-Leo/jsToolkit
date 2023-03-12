// 取交集
const toSet = arr => new Set(arr);

const map = (arr, fn) => arr.map(fn)

const intersectionBy = (a, b, fn) => a.filter(x => toSet(map(b, fn)).has(fn(x)))

const arr = [{
        name: 'Mr Liu',
        age: 20
    },
    {
        name: 'Mr Chen',
        age: 18
    },
    {
        name: 'Mr Lee',
        age: 21
    }
]

const arrs = [{
        id: 1,
        name: 'Mr Zhang'
    },
    {
        id: 2,
        name: 'Mr Lee'
    }
]
const res = intersectionBy([2.1, 1.2], [2.3, 3.4], Math.floor);
console.log(res);

const compare = i => i.name
const ress = intersectionBy(arr, arrs, compare)
console.log(ress)