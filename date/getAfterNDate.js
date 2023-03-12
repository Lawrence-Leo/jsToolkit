// 获取后 n 天日期
function getAfterNDate(n) {
  const date = +new Date();
  const result = [];
  let _n = n ? n : 7;
  let newDate, month, day;
  for (let i = 1; i <= _n; i++) {
    newDate = date + i * 24 * 60 * 60 * 1000;
    month = new Date(newDate).getMonth() + 1;
    day = new Date(newDate).getDate();
    result.push(month + '-' + day);
  }
  return result;
}

console.log(getAfterNDate(4))

export default getAfterNDate