// 获取前 n 天日期
function getBeforeNDate(n) {
  const date = +new Date();
  const result = [];
  let _n = n ? n : 7;
  let newDate, month, day;
  for (let i = _n; i > 0; i--) {
    newDate = date - i * 24 * 60 * 60 * 1000;
    month = new Date(newDate).getMonth() + 1;
    day = new Date(newDate).getDate();
    result.push(month + '-' + day);
  }
  return result;
}

console.log(getBeforeNDate(4));

export default getBeforeNDate