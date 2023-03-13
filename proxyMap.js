const backEndMap = {
  james: {
    name: "张三",
    url: "http://192.168.12.1",
  },
  ci: {
    name: "集成环境",
    url: "http://192.168.12.1",
  },
  default: {
    name: "default",
    url: "http://192.168.12.1",
  },
};

const getArgv = function () {
  const args = process.argv.slice(3);
  const record = {};
  args.forEach((item) => {
    const [key, value] = item.split("=");
    record[key.slice(2)] = value;
  });
  return record;
};

const genProxy = function (target) {
  return {
    "/api": {
      target,
      changeOrigin: true,
      pathRewrite: {
        "^/api": "",
      },
    },
  };
};

module.exports = function () {
  const args = getArgv();
  let partner = backEndMap[args.backEnd];
  if (partner) {
    console.log(
      "🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣\npartner：",
      partner.name,
      "\n🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣"
    );
  } else {
    partner = backEndMap["default"];
  }

  return genProxy(partner?.url);
};
