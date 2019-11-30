//1、动画原理
//获得盒子当前的位置
//让盒子在当前位置上加上一个移动距离
//利用定时器重复这个操作
//动画函数封装
//简单动画函数封装obj目标对象，target目标位置
//给不同元素指定了不同的定时器
//缓动动画原理
//让盒子每次移动的距离慢慢变小，速度就会慢慢落下来
//核心算法：（目标值-现在的位置）/10作为每次移动的距离 步长
//停止的条件是：让当前盒子位置等于目标位置就停止定时器
function animate(obj, target, callback) {
    //console.log(callback);
    //当我们不断的点击按钮，这个元素的速度会越来越快，因为开启了太多的定时器
    //解决方案就是让我们的元素只有一个定时器
    clearInterval(obj.timer);
    obj.timer = setInterval(function () {
        //步长值写入定时器里面
        //把步长值写成整数
        //var step = Math.ceil((target - obj.offsetLeft)/10);
        //防止回退是像素不准确的问题
        var step = (target - obj.offsetLeft) / 10;
        step = step > 0 ? Math.ceil(step) : Math.floor(step);
        if (obj.offsetLeft >= target) {
            //停止动画的本质就是停止计时器
            clearInterval(obj.timer);
            //回调函数写到定时器结束里面
            if (callback) {
                callback();
            }
        }
        //把每次加5的步长改为一个慢慢变小的值
        obj.style.left = obj.offsetLeft + step + "px";
    }, 15);
}