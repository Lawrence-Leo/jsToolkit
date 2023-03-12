// 将http网址重定向https网址
const {
  protocol,
  href,
  replace
} = location || window.location

export const redirectHttps = () => {
  if (protocol !== 'https:') {
    const [_, domain] = href.split('//')
    replace('https://' + domain);
  }
};