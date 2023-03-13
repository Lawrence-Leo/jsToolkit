
const getWhiteList = source => {
  const whiteList = [];
  const func = arr => {
    arr.forEach(item => {
      if (!item.meta?.auth) {
        return whiteList.push(item);
      }
      if (item.children?.length) {
        return func(item.children);
      }
    });
  };
  func(source);
  return whiteList;
};

const getRouteByTitle = (data, title) => {
  let route;
  const recur = (value, title) => {
    value.forEach(item => {
      if (item.meta?.title === title) {
        return (route = item);
      }
      if (item.children?.length) {
        return recur(item.children, title);
      }
    });
  };
  recur(data, title);
  return route;
};
