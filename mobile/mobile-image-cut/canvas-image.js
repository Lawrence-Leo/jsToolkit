const image = new Image();

const file = document.querySelector('#getFile')

const download = document.querySelector('#download')

file.addEventListener('change', function (e) {
    // console.dir(e.target)
    const file = e.target.files[0]
    // 检测图片类型
    const fileType = /image/.test(file.type)
    // console.log(fileType)
    fileType && toDrawImage(file)
})

download.addEventListener('click', function () {
    reloadPage()
})

function reloadPage() {
    location.href = newURL
}



var newURL;

var clientWidth;
var clientHeight;
var imageScale;
var imageWidth;
window.addEventListener('DOMContentLoaded', function () {
    clientWidth = document.body.clientWidth;
    clientHeight = document.body.clientHeight;
});

function toDrawImage(file) {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    // reader、image、script
    reader.onload = function () {
        // console.log(this.result)
        const imgShow = new Image();
        imgShow.src = this.result;
        imgShow.className = 'imgShow';
        showModel(this.result);
        document.body.append(imgShow);
    };
}

function showModel(src) {
    const chooseBox = document.querySelector('.chooseBox');
    chooseBox.style.display = 'block';
    document.querySelector('#getFile').style.display = 'none';
    var startX = 0;
    var startY = 0;
    var x = 0;
    var y = 0;
    var endX = 0;
    var endY = 0;
    var moveX = 0;
    var moveY = 0;
    chooseBox.addEventListener('touchstart', function (e) {
        // console.log(e.targetTouches[0])
        this.style.backgroundImage = '';
        startX = e.targetTouches[0].pageX;
        startY = e.targetTouches[0].pageY;
        x = this.offsetLeft;
        y = this.offsetTop;
    });
    chooseBox.addEventListener('touchmove', function (e) {
        moveX = e.targetTouches[0].pageX - startX;
        moveY = e.targetTouches[0].pageY - startY;
        this.style.left = x + moveX + 'px';
        this.style.top = y + moveY + 'px';
        // this.style.backgroundPosition = `-${moveX}px -${moveY}px`
        e.preventDefault();
    });

    chooseBox.addEventListener('touchend', function (e) {
        this.style.backgroundImage = `url(${src})`;
        this.style.backgroundSize = `${clientWidth}px ${clientHeight}px`;
        endX = moveX + endX;
        endY = moveY + endY;
        // console.log(endX, endY);
        this.style.backgroundPosition = -endX + 'px' + ' ' + -endY + 'px';
        paint(src, endX, endY);
    });

    function paint(src, x, y) {
        image.src = src;
        image.onload = function () {
            const canvas = document.createElement('canvas');
            const ctx = canvas.getContext('2d');
            console.warn(clientWidth, clientHeight);
            canvas.width = clientWidth;
            canvas.height = clientHeight;
            ctx.drawImage(this, 0, 0, clientWidth, clientHeight);
            const imgData = ctx.getImageData(x.toFixed(1), y.toFixed(1), 300, 300);
            canvas.width = 300;
            canvas.height = 300;
            ctx.putImageData(imgData, 0, 0);
            const base64URL = canvas.toDataURL('image/jpeg', 0.5);
            newURL = base64URL.replace('image/jpeg', 'image/octet-stream');
            // console.log(base64URL)
        };
    }
}
