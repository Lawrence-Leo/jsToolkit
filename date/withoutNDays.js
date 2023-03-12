// 是否是 7 天以内(未来)
function withoutNDays(timestamp, n) {
  const $n = n ? n : 7;
  timestamp = +new Date(timestamp);
  const endTime = 24 * 60 * 60 * 1000 * $n;
  const currentTime = new Date().setHours(0, 0, 0, 0);
  return currentTime <= timestamp && currentTime + endTime > timestamp;
}

export default withoutNDays
// console.log(withoutNDays('2023-3-15', 4));