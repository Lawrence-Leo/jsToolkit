// 用 weakmap 解决 循环引用的问题
const isType = (val, type) => val instanceof type

function deepCopy(obj, hash = new WeakMap()) {
  if (isType(obj, Date)) {
    return new Date(obj);
  }
  if (isType(obj, RegExp)) {
    return new RegExp(obj);
  }
  if (hash.has(obj)) {
    return hash.get(obj)
  }
  const desc = Object.getOwnPropertyDescriptors(obj);
  const proto = Object.getPrototypeOf(obj)
  const copyObj = Object.create(proto, desc);
  hash.set(obj, copyObj);
  Reflect.ownKeys(obj).forEach(key => {
    let item = obj[key];
    if (
      typeof item === 'object' &&
      item !== null &&
      typeof item !== 'function'
    ) {
      copyObj[key] = deepCopy(item);
    } else {
      copyObj[key] = item;
    }
  })
  return copyObj;
}

export default deepCopy