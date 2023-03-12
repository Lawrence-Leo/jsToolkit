const Mock = require('mockjs');

const data = Mock.mock({
  'list|2-7': [
    {
      // 1 代表初始值
      'id|+1': 1,
      // 生成 3 - 4 之间的随机数 ; 0 仅代表类型而已
      'random|3-4': 0,
      // 生成一个浮点数，整数部分取值 2 - 9，小数部分保留 0-2 位，0 是用来确定类型的
      'floatNum|2-9.0-2': 0,
      // 生成一个整数部分是 110 ，保留两位小数的浮点数
      'num|110.0-3': 0,
      // abc 重复 4 - 9 次
      'str|4-9': 'abc',
      // abc 出现 4 次
      'str1|4': 'abc',
      // true 表示为 布尔型，true 和 false 各占 50%
      'isTrue|1': true,
      // 为 false 的概率为 70%，为 true 的概率为 30%
      'isFalse|7-3': false,
      // 在后面对象中取 2 - 4 个属性
      'James|2-4': {
        gender: 'male',
        age: 20,
        height: '184cm',
        hobby: ['piaon', 'music', 'dance'],
        native: 'SiChuan',
      },
      // 从后面数组中随机取出一个元素
      'favorite|1': ['piano', 'music', 'dance', 'song'],
      // 生成一个重复元素的数组 重复次数 2-6 次
      'repeat|2-6': ['James'],
      // 根据正则生成随机手机号
      tel: /^1[3-9]\d{9}$/,
    },
  ],
});

console.log(JSON.stringify(data));
