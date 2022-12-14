window.addEventListener('load',function () {
    // app显示与隐藏
    var li = document.querySelector('.nav_l').querySelectorAll('li');
    var app = document.querySelector('.app');

    li[11].addEventListener('mouseover',function() {
        app.style.display = 'block';
    })

    li[11].addEventListener('mouseout',function() {
        app.style.display = 'none';
    })

    // car
    var car_li = document.querySelector('.nav_r').querySelectorAll('li');
    var car = document.querySelector('.nav_r').querySelector('#car')

    car_li[3].addEventListener('mouseenter',function() {
        car.style.display = 'block';
        car_li[3].style.backgroundColor = '#fff'
        car_li[3].children[0].style.color = '#ff6700'
    })

    car_li[3].addEventListener('mouseleave',function() {
        car.style.display = 'none';
        car_li[3].style.backgroundColor = '#424242'
        car_li[3].children[0].style.color = '#b0b0b0'
    })


    // serch
    var serch = document.querySelector('.serch');
    var input = document.querySelector('#input');
    var serchr = document.querySelector('#serchr');

    // input框得到焦点
    input.addEventListener('focus',function() {
        serch.style.border = '1px solid #ff6700'
        input.style.borderRight = '1px solid #ff6700';
        serchr.style.display = 'block';
    })

    // 失去焦点
    input.addEventListener('blur',function() {
        serch.style.border = ''
        serchr.style.display = 'none';
        input.style.borderRight = '';
    })

    // 侧边栏app
    var li = document.querySelector('.back').querySelectorAll('li');
    var sm = document.querySelector('.sm');
    li[0].onmouseover = function() {
        sm.style.display = 'block';
    }

    li[0].onmouseout = function() {
        sm.style.display = 'none';
    }

    // 侧边栏
    var over = document.querySelector('.over');
    var back = document.querySelector('.back');
    var date = document.querySelectorAll('.back a')

    // 鼠标经过换颜色
    for(var i = 0; i<date.length; i++) {
        // 经过
        date[i].addEventListener('mouseenter',function() {
            // 排她思想
            for(var i = 0; i<date.length; i++) {
                date[i].style.color = ''
            }
            this.style.color = '#ff6700'
        })
        // 离开
        date[i].addEventListener('mouseleave',function() {
            this.style.color = '#5f5750'
        })
    }

    // 页面滚动事件
    document.addEventListener('scroll',function() {
        if (window.pageYOffset >= 625) {
            back.style.top = '100px';
            over.style.display = 'block';
        } else {
            over.style.display = 'none';
            back.style.top = '205px';
        }
        
    })

    // 点击返回顶部
    over.addEventListener('click',function() {
        // 第一种滚动
        // window.scroll(0,0);
        // 第二种滚动根据动画来实现
        animater(window,0);
    });
    
    function animater(obj, target, callback) {
        //先清除之前的定时器，只保留当前的一个定时器
        clearInterval(obj.timer);
        obj.timer = setInterval(function () {
            // 1.步长值写在定时器里面 步长值=（目标值-现在的位置）/10
            var step = Math.ceil(target - window.pageYOffset) / 10;
            //判断步长的正负
            // 如果步长为正，往大里取整 Math.ceil
            // 如果步长为负，往小里取整 Math.floor
            step = step > 0 ? Math.ceil(step) : Math.floor(step);
            // 2.当盒子位置=目标位置，停止定时器
            if (window.pageYOffset == target) {
                //用停止定时器的方式 停止动画
                clearInterval(obj.timer);
                // 如果有回调函数，调用回调函数
                // if (callback) {
                //     callback();
                // }
                callback && callback();
            }
            // 3.把之前每次加1,改为一个慢慢变小的步长值 步长值=（目标值-现在的位置）/10
            // obj.style.left = window.pageYOffset + step + 'px';//记得加单位
            window.scroll(0,window.pageYOffset + step);
        }, 10)
    }

    // 热门和穿戴转换
    var resit = document.querySelector('.resit').querySelectorAll('a');
    var item = document.querySelectorAll('#itme');

    for (var i = 0; i<resit.length; i++) {
        // 创建索引
        // resit[i].setAttribute('index',i)

        resit[i].addEventListener('mouseover',function() {
            for (var i = 0; i<item.length; i++) {
                if (resit[i] == this) {
                    item[i].classList.add('hiv');
                } else {
                    item[i].classList.remove('hiv');
                };
            }

            for (var i = 0;i<resit.length;i++) {
                resit[i].style.color = '';
                resit[i].style.borderBottom = '';
                resit[i].style.paddingBottom = '';
            };
            this.style.color = '#ff6700'
            this.style.borderBottom = '2px solid #ff6700'
            this.style.paddingBottom = '5px'
        })
    };

    // 家电
    var jd = document.querySelector('#jd').querySelectorAll('a');
    var iteme = document.querySelectorAll('#itmee');
    // 
    for (var i = 0; i<jd.length; i++) {
        // 每个a绑定鼠标移动事件
        jd[i].addEventListener('mouseover',function() {
            for (var i = 0; i<iteme.length; i++) {
                if (jd[i] == this) {
                    iteme[i].classList.add('hiv');
                } else {
                    iteme[i].classList.remove('hiv');
                }
            }
            // 排他思想
            for (var i = 0; i<jd.length; i++) {
                jd[i].style.color = '';
                jd[i].style.borderBottom = '';
                jd[i].style.paddingBottom = '';

            }
            this.style.color = '#ff6700';
            this.style.borderBottom = '2px solid #ff6700';
            this.style.paddingBottom = '5px'
        })
    };

    // 生活电器
    var live = document.querySelector('#live').querySelectorAll('a');
    var itme2 = document.querySelectorAll('#itme2');
    // 
    for (var i = 0; i<live.length; i++) {
        // 每个a绑定鼠标移动事件
        live[i].addEventListener('mouseover',function() {
            for (var i = 0; i<itme2.length; i++) {
                if (live[i] == this) {
                    itme2[i].classList.add('hiv');
                } else {
                    itme2[i].classList.remove('hiv');
                }
            }
            // 排他思想
            for (var i = 0; i<live.length; i++) {
                live[i].style.color = '';
                live[i].style.borderBottom = '';
                live[i].style.paddingBottom = '';

            }
            this.style.color = '#ff6700';
            this.style.borderBottom = '2px solid #ff6700';
            this.style.paddingBottom = '5px'
        })
    };

    // 厨房电器
    var cook = document.querySelector('#cook').querySelectorAll('a');
    var itme3 = document.querySelectorAll('#itme3');
    // 
    for (var i = 0; i<cook.length; i++) {
        // 每个a绑定鼠标移动事件
        cook[i].addEventListener('mouseover',function() {
            for (var i = 0; i<itme3.length; i++) {
                if (cook[i] == this) {
                    itme3[i].classList.add('hiv');
                } else {
                    itme3[i].classList.remove('hiv');
                }
            }
            // 排他思想
            for (var i = 0; i<cook.length; i++) {
                cook[i].style.color = '';
                cook[i].style.borderBottom = '';
                cook[i].style.paddingBottom = '';

            }
            this.style.color = '#ff6700';
            this.style.borderBottom = '2px solid #ff6700';
            this.style.paddingBottom = '5px'
        })
    }

    // 智能家居
    var zn = document.querySelector('#zn').querySelectorAll('a');
    var itme4 = document.querySelectorAll('#itme4');
    // 
    for (var i = 0; i<zn.length; i++) {
        // 每个a绑定鼠标移动事件
        zn[i].addEventListener('mouseover',function() {
            for (var i = 0; i<itme4.length; i++) {
                if (zn[i] == this) {
                    itme4[i].classList.add('hiv');
                } else {
                    itme4[i].classList.remove('hiv');
                }
            }
            // 排他思想
            for (var i = 0; i<zn.length; i++) {
                zn[i].style.color = '';
                zn[i].style.borderBottom = '';
                zn[i].style.paddingBottom = '';

            }
            this.style.color = '#ff6700';
            this.style.borderBottom = '2px solid #ff6700';
            this.style.paddingBottom = '5px'
        })
    }

    // 运动出行
    var yd = document.querySelector('#yd').querySelectorAll('a');
    var itme5 = document.querySelectorAll('#itme5');
    // 
    for (var i = 0; i<yd.length; i++) {
        // 每个a绑定鼠标移动事件
        yd[i].addEventListener('mouseover',function() {
            for (var i = 0; i<itme5.length; i++) {
                if (yd[i] == this) {
                    itme5[i].classList.add('hiv');
                } else {
                    itme5[i].classList.remove('hiv');
                }
            }
            // 排他思想
            for (var i = 0; i<yd.length; i++) {
                yd[i].style.color = '';
                yd[i].style.borderBottom = '';
                yd[i].style.paddingBottom = '';

            }
            this.style.color = '#ff6700';
            this.style.borderBottom = '2px solid #ff6700';
            this.style.paddingBottom = '5px'
        })
    }

    // 日用出行
    var ry = document.querySelector('#ry').querySelectorAll('a')
    var item6 = document.querySelectorAll('#itme6');

    for(var i = 0; i<ry.length; i++) {
        // 每个
        ry[i].addEventListener('mouseenter',function() {
            for (var i = 0; i<item6.length; i++) {
                if (ry[i] == this) {
                    item6[i].classList.add('hiv');
                }else {
                    item6[i].classList.remove('hiv');
                }
            }
            // 排他思想
            for (var i = 0; i<ry.length; i++) {
                ry[i].style.color = '';
                ry[i].style.borderBottom = '';
                ry[i].style.paddingBottom = '';

            }
            this.style.color = '#ff6700';
            this.style.borderBottom = '2px solid #ff6700';
            this.style.paddingBottom = '5px'
        })
    }



    // 轮播图
    // 事件源
    var left = document.querySelector('.left'); // 左键
    var right = document.querySelector('.right');  // 右箭头
    var banner = document.querySelector('.banner').querySelector('.wrapper');
    var ul_li = document.querySelector('.fors').querySelector('ul').querySelectorAll('li');
    var ul = document.querySelector('.fors').querySelector('ul');
    var ol = document.querySelector('.ol');
    var focusWidth = banner.offsetWidth;


    // 鼠标经过显示和隐藏按钮
    banner.addEventListener('mouseenter',function() {
        // left.style.display = 'block';
        // right.style.display = 'block';
        clearInterval(timer);
    })

    banner.addEventListener('mouseleave',function() {
        // left.style.display = 'none';
        // right.style.display = 'none';
        timer = setInterval(function() {
            right.click(); // 调用一直点击
        },2000)
    })

    // 动态创建小圆圈并点击翻图片
    for (var i = 0; i<ul_li.length;i++) {
        // 创建节点
        var li = document.createElement('li');
        li.setAttribute('index',i);
        // 把创建的节点放人ol
        ol.appendChild(li);

        // 创建小li的同时为每一个小li绑定点击事件
        li.addEventListener('click',function() {
            // 排他思想
            for (var i = 0; i<ol.children.length; i++) {
                ol.children[i].className = '';
            }
            this.className = 'color';
            var index = this.getAttribute('index');
            // 
            num = index;
            circle = index
            // 调用动画函数
            // ul中的li中的图片移动距离=小圆圈索引号*ul中li中图片的宽度(图片要往左走 是负值)
            animate(ul, -index * focusWidth);
        })
    }
    // 让第一个li 有个默认颜色
    ol.children[0].className = 'color'
    // 5.克隆第一张图片到原图片堆的最后
    // 写在生成小圆圈的后面，所以克隆的图片增加的一个个数，不会影响动态生成小圆圈的个数
    var first = ul.children[0].cloneNode(true);
    ul.appendChild(first);
    // 6.点击右侧按钮，图片滚动一张,实现图片的无缝滚动
    // 声明一个全局变量num控制6.中点击右侧按钮，图片滚动到下一张 
    var num = 0;
    // 声明一个全局变量circle控制7.中点击右侧按钮，小圆圈变化
    var circle = 0;

    // 节流阀
    flag = true;

    // 右侧按钮和小圆圈的做法差不多
    right.addEventListener('click',function() {
        if (flag) {
            flag = false; // 关闭节流阀
            // 判断当点击最后一张的时候让我的快速的翻到前面
            if (num == ul.children.length -1) {
                ul.style.left = 0;
                num = 0;
            }
            // 每点击一次变量加一
            num++
            // 调用动画函数
            animate(ul,-num * focusWidth,function() {
                flag = true; // 当动画执行完后 打开节流阀
            });

            // 7.点击右侧按钮的时候，小圆圈随之变化（由于点左侧按钮也要有同样效果，所以变量circle为全局变量）
            circle++;
            if (circle == ol.children.length) {
                circle = 0;
            }
            // 排他思想
            for (var i = 0; i<ol.children.length; i++) {
                ol.children[i].className = ''
            }
            // 给当前小圆圈加上color类名
            ol.children[circle].className = 'color';

        }
    })

    // 左侧按钮和小圆圈的做法差不多
    left.addEventListener('click',function() {
        if (flag) {
            flag = false;
            // 判断当点击最后一张的时候让我的快速的翻到前面
            if (num == 0) {
                num = ul.children.length - 1;
                ul.style.left = -num * focusWidth + 'px';
            }
            // 每点击一次变量加一
            num--
            // 调用动画函数
            animate(ul,-num * focusWidth,function() {
                flag = true;
            });

            // 7.点击右侧按钮的时候，小圆圈随之变化（由于点左侧按钮也要有同样效果，所以变量circle为全局变量）
            circle--;
            if (circle < 0) {
                circle = ol.children.length - 1;
            }
            // 排他思想
            for (var i = 0; i<ol.children.length; i++) {
                ol.children[i].className = ''
            }
            // 给当前小圆圈加上color类名
            ol.children[circle].className = 'color';
        }
    })

    // 设置定时器
    var timer = setInterval(function() {
        right.click(); // 调用一直点击
    },2500)

})