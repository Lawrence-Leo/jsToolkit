// 判断元素是否在视口中可见
const elementInViewPort = (el, partiallyVisible = false) => {
  const {
    top,
    left,
    bottom,
    right
  } = el.getBoundingClientRect();
  const {
    innerHeight,
    innerWidth
  } = window;
  return partiallyVisible ?
    ((top > 0 && top < innerHeight) ||
      (bottom > 0 && bottom < innerHeight)) &&
    ((left > 0 && left < innerWidth) || (right > 0 && right < innerWidth)) :
    top >= 0 && left >= 0 && bottom <= innerHeight && right <= innerWidth;
};
// 不可见
elementInViewPort(el);
// 部分可见
elementInViewPort(el, true);