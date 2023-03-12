// 消除字符串前后空格
const trim = str => str.replace(/(^\s*)|(\s*$)/, '')

export default trim
// console.log(trim('  Mr Lee '))