// 简单模板引擎
const template = (
  '<div>' +
    '<div class="msg {{iconClass}}">{{text}}</div>' +
  '</div>'
)
// 正则匹配{{}}替换
function templateEngine(source, data) {
  if (!data) {
    return source
  }
  return source.replace(/{{([^}}]+)?}}/g, function (_, key) {  
    return data[key] ? data[key] : ''
  })
}
// 方法调用
document.querySelector('body').innerHTML = templateEngine(template, {
  text: '提示',
  iconClass: 'info'
})