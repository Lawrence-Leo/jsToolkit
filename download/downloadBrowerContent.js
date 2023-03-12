function download(link, name) {
  if (!name) {
    name = link.slice(link.lastIndexOf('/') + 1);
  }
  let eleLink = document.createElement('a');
  eleLink.download = name;
  eleLink.style.display = 'none';
  eleLink.href = link;
  document.body.appendChild(eleLink);
  eleLink.click();
  document.body.removeChild(eleLink);
}

function downloadFile(name, content) {
  if (typeof name == 'undefined') {
    throw new Error('The first parameter name is a must');
  }
  if (typeof content == 'undefined') {
    throw new Error('The second parameter content is a must');
  }
  //   createObjectURL 处理的是二进制内容
  if (!(content instanceof Blob)) {
    //   将非二进制内容转化为 二进制大文件对象
    content = new Blob([content]);
  }
  const link = URL.createObjectURL(content);
  download(link, name);
}