function format(fmt, timestamp) {
  const date = timestamp ? new Date(timestamp) : new Date();
  const mapper = {
    'Y+': date.getFullYear(),
    'M+': date.getMonth() + 1,
    'D+': date.getDate(),
    'h+': date.getHours(),
    'm+': date.getMinutes(),
    's+': date.getSeconds(),
    'W': date.getDay(),
  };
  for (var k in mapper) {
    if (new RegExp('(' + k + ')').test(fmt)) {
      fmt = fmt.replace(RegExp.$1, () => {
        // 星期几
        if (k === 'W') {
          const week = ['日', '一', '二', '三', '四', '五', '六'];
          return week[mapper[k]];
          // 年份 or 小于10不加0
        } else if (k === 'Y+' || RegExp.$1.length == 1) {
          return mapper[k];
        } else {
          // 小于10补位0
          return ('00' + mapper[k]).substr(('' + mapper[k]).length);
        }
      });
    }
  }
  return fmt;
}
const a = format('YYYY-MM-DD hh:mm:ss');
const b = format('YYYY年MM月DD日 hh:mm:ss 周W', 1587183761000);
const c = format('YYYY/MM/DD hh:mm:ss');
console.log(b);