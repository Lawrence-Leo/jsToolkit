// 返回当前是今年的第几天
const now = new Date();

const { floor } = Math;

const dayOfYear = date =>
  floor((date - new Date(date.getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24);

const res = dayOfYear(now);

console.log(res);
