window.addEventListener('load',function() {

    // 循环精灵图
    var img = document.querySelector('#bac').querySelectorAll('a')
    //
    for (var i = 0; i<img.length; i++) {
        var index = i * 70;
        img[i].style.backgroundPosition = '-'+ index +'px 0'
    }

    // 密码框判断
    var inp1 = document.querySelector('#inp1')
    var inp2 = document.querySelector('#inp2')
    var li_dt = document.querySelector('.login ul')
    var user = document.querySelector('#user')
    var pasd = document.querySelector('#pasd')

    // input框得到焦点
    inp1.addEventListener('focus',function() {
        li_dt.children[0].className = 'bor'
        inp1.style.backgroundColor = '#fff'

    })

    inp1.addEventListener('blur',function() {
        li_dt.children[0].className = ''
        if (inp1.value == '') {
            inp1.style.backgroundColor = '#fcf2f3'
            user.style.display = 'block'
        }else {
            inp1.style.backgroundColor = '#f9f9f9'
            user.style.display = 'none'
        }
    })

    inp2.addEventListener('focus',function() {
        li_dt.children[1].className = 'bor'
        inp2.style.backgroundColor = '#fff'
    })

    inp2.addEventListener('blur',function() {
        li_dt.children[1].className = ''
        if (inp2.value == '') {
            inp2.style.backgroundColor = '#fcf2f3'
            pasd.style.display = 'block'
        }else {
            inp2.style.backgroundColor = '#f9f9f9'
            pasd.style.display = 'none'
        }
    })

    li_dt.children[3].addEventListener('mouseenter',function() {
        this.style.opacity = '.6'
    })

    li_dt.children[3].addEventListener('mouseleave',function() {
        this.style.opacity = ''
    })

    // 显示密码明文
    var eye1 = document.querySelector('#eye1')
    var eye2 = document.querySelector('#eye2')

    eye1.addEventListener('click',function() {
        this.style.display = 'none';
        eye2.style.display = 'block';
        inp2.type = 'text';
    })

    eye2.addEventListener('click',function() {
        this.style.display = 'none'
        eye1.style.display = 'block'
        inp2.type = 'password'
    })


})