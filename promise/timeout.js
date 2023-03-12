// fetch请求超时配置，fetch本身并不支持超时处理
const timer = new Promise((resolve, reject) =>
  setTimeout(reject(new Error('request timeout')), 10000)
);

const promise = Promise.race([fetch('http:localhost:3000'), timer]);
