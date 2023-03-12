// 生成范围随机数
const {
  round,
  random
} = Math

const genRandomNum = (min, max) =>
  max ? min + round(random() * (max - min)) : round(random() * min);

export default genRandomNum
// console.log(genRandomNum(100));