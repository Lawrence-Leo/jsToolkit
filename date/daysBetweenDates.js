// 返回两个日期之间相差多少天
const start = new Date('2021-01-13');

const end = new Date('2021-01-20');

const getDaysBetweenDates = (dateInitial, dateFinal) =>
  (dateFinal - dateInitial) / (1000 * 3600 * 24);

const res = getDaysBetweenDates(start, end);

console.log(res);
