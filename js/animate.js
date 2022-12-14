function animate(obj, target, callback) {
    //先清除之前的定时器，只保留当前的一个定时器
    clearInterval(obj.timer);
    obj.timer = setInterval(function () {
        // 1.步长值写在定时器里面 步长值=（目标值-现在的位置）/10
        var step = Math.ceil(target - obj.offsetLeft) / 10;
        //判断步长的正负
        // 如果步长为正，往大里取整 Math.ceil
        // 如果步长为负，往小里取整 Math.floor
        step = step > 0 ? Math.ceil(step) : Math.floor(step);
        // 2.当盒子位置=目标位置，停止定时器
        if (obj.offsetLeft == target) {
            //用停止定时器的方式 停止动画
            clearInterval(obj.timer);
            // 如果有回调函数，调用回调函数
            // if (callback) {
            //     callback();
            // }
            callback && callback();
        }
        // 3.把之前每次加1,改为一个慢慢变小的步长值 步长值=（目标值-现在的位置）/10
        obj.style.left = obj.offsetLeft + step + 'px';//记得加单位
    }, 15)
}