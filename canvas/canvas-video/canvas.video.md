#### 直接上代码

````
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
</head>

<body>

    <body>
        <video id="video" loop width="400" height="600" webkit-playsinline="true" src="./1.mp4"></video>
        <p>
             <button type="button" id="btn-play">开始</button>  
            <button type="button" id="btn-pause">暂停</button>
        </p>
    </body>
    <script type="text/javascript">
        var VideoToCanvas = (function (window, document) {
            function VideoToCanvas(videoElement) {
                if (!videoElement) {
                    return;
                }
                // 创建一个canvas元素
                var canvas = document.createElement('canvas');
                // 获取视频的宽高
                canvas.width = videoElement.offsetWidth;
                canvas.height = videoElement.offsetHeight;
                // 获取画笔
                ctx = canvas.getContext('2d');
                // 对视频标签进行浅的拷贝
                var newVideo = videoElement.cloneNode(false);
                // 定时器
                var timer = null;
                var requestAnimationFrame =
                    window.requestAnimationFrame ||
                    window.mozRequestAnimationFrame ||
                    window.webkitRequestAnimationFrame ||
                    window.msRequestAnimationFrame;
                // 清除定时器
                var cancelAnimationFrame =
                    window.cancelAnimationFrame || window.mozCancelAnimationFrame;
                // 画视频
                function drawCanvas() {
                    ctx.drawImage(newVideo, 0, 0, canvas.width, canvas.height);
                    // 每秒执行60次
                    timer = requestAnimationFrame(drawCanvas);
                }
                // 取消定时器
                function stopDrawing() {
                    cancelAnimationFrame(timer);
                }
                // 点击开始就画视频
                newVideo.addEventListener(
                    'play',
                    function () {
                        drawCanvas();
                    },
                    false
                );
                newVideo.addEventListener('pause', stopDrawing);
                newVideo.addEventListener('ended', stopDrawing);
                // 使用canvas替换video标签，传入一个video元素并克隆，
                videoElement.parentNode.replaceChild(canvas, video);
                // this指向new出来的对象
                this.play = function () {
                    newVideo.play();
                };
                this.pause = function () {
                    newVideo.pause();
                };
                this.playPause = function () {
                    if (newVideo.paused) {
                        this.play();
                    } else {
                        this.pause();
                    }
                };
                this.change = function (src) {
                    if (!src) {
                        return;
                    }
                    newVideo.src = src;
                };
                this.drawFrame = drawCanvas;
            }
            return VideoToCanvas;
        })(window, document);
    </script>
    <script>
        var video = document.getElementById('video');
        // 传入一个video对象并克隆，将浅拷贝的对象的画出来，将创建的canvas替换掉video标签
        var canvasVideo = new VideoToCanvas(video);
        //模拟click事件
        //获取btn
        var btn = document.querySelector('#btn-play');
        //创建event
        var event = new Event('touchstart');
        //click事件绑定事件处理程序
        btn.addEventListener('touchstart', function () {
            // 通过this绑定的事件
            canvasVideo.pause();
            canvasVideo.play();
        });
        // 触发事件,一定要延迟触发，等到视频加载完成之后。
        setTimeout(function () {
            btn.dispatchEvent(event);
        }, 2000);

        //取消btn上其他事件
        // btn.onclick = null;
        document.querySelector('body').addEventListener('touchend', function () {
            canvasVideo.play();
        });
        document.getElementById('btn-play').addEventListener(
            'click',
            function () {
                canvasVideo.play();
            },
            false
        );
        document.getElementById('btn-pause').addEventListener(
            'click',
            function () {
                canvasVideo.pause();
            },
            false
        );
    </script>
</body>

</html>
````

