const Mock = require("mockjs");
const Random = Mock.Random;

const key = "lists|6-10";
// const result = Random.capitalize("hello");
// 自定义占位符
Random.extend({
  hobby: function() {
    var arr = ["swim", "run", "play computer game", "ride"];
    return this.pick(arr);
  }
});

const result = Mock.mock({
  [key]: [
    {
      "id|+1": 1,
      name: "@cname",
      email: "@email",
      picture: "@image('120x120', '#dcdcdc')",
      remark: "@title",
      address: "@city(true)",
      "gender|0-1": 0,
      hobby: "@hobby"
    }
  ]
});

module.exports = () => result;
