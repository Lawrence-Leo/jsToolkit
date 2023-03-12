const Mock = require('mockjs');

const data = Mock.mock({
  list: [
    {
      // 为 true 的概率为 70% ， 为 false 的概率为 30%
      isTrue: '@boolean(7,3,true)',
      // 生成 60 到 100 的随机自然数
      random: '@natural(60, 100)',
      // 生成 60 到 100 的随机整数
      inter: '@integer(60, 100)',
      // 生成 60 到 100 的随机浮点数
      floatNum: '@float(60,100)',
      // 生成 60 到 100 的随机浮点数，保留 3 到 5 位小数
      floatNums: '@float(60,100,3,5)',
      // 生成一个随机字符 不区分大小写
      char: '@character()',
      // 生成随机大写字母
      upper: '@character(upper)',
      // 生成随机字符数字
      num: '@character(number)',
      // 在字符串 James Lee 中生成随机 字符
      rChar: '@character(James Lee)',
      // 生成随机 5 到 8 位字符串
      str: '@string(5,8)',
      // 生成随机 5 到 10 位小写字符串
      lowerStr: '@string(lower,5,10)',
      // 生成 5 位数字类型字符串
      numStr: '@string(number,5)',
      // 在 James Lee 中随机选择 5 个字符
      rangeStr: '@string(James Lee,5)',
      // 生成一个随机日期
      date: '@date()',
      // 生成随机时间
      time: '@time()',
      // 生成随机日期时间
      dateTime: '@datetime()',
      // 获取当前日期时间
      current: '@now()',
      // 获取当前天
      currentYeat: '@now(day)',
      // 生成一张指定 大小 色彩 文字 图片
      image: '@image(200x200,#DCF2E0,Mock.js)',
      // 生成一段随机文本
      text: '@paragraph()',
      // 生成 3 到 5 段随机单词
      sentence: '@sentence(3, 5)',
      // 生成一段随机中文
      chinese: '@cparagraph()',
      // 生成一段随机中文句子
      juzi: '@csentence',
      // 生成随机英文名
      username: '@name()',
      // 生成随机中文名
      mingzi: '@cname()',
      // 生成随机 url
      url: '@url()',
      // 生成随机域名
      domain: '@domain()',
      // 生成随机邮箱
      email: '@email()',
      // 生成随机 ip
      ip: '@ip()',
      // 生成随机省名
      province: '@province()',
      // 生成随机城市
      city: '@city()',
      // 生成随机地区
      county: '@county()',
      // pick 数组中一个随机字符
      pick: '@pick([a,b,c,d,e,f,g])',
      // 乱序
      shuffle: '@shuffle(["a","b","c","d","e","f","g"])',
      // 生成全球唯一标识符
      guid: '@guid()',
      // 生成随机 id
      id: '@id()'
    },
  ],
});

console.log(data);
