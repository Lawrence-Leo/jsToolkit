// 检测字符串是否包含敏感字符
const checkStr = (str, charArray) => charArray.every(i => str.indexOf(i) === -1)

export default checkStr
// const str = '<script lang="typescript" type="text/javascript"></script>'
// console.log(checkStr(str, ['s']))