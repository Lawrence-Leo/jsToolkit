// 返回字符串的字节长度 Blob不属于 node
const byteSize = str => new Blob([str]).size;

export default byteSize
// console.log(byteSize('李鹏'))