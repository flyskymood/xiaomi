$(function() {
    // 循环精灵图
    $('.tb a').each(function(i,DOM) {
        var index = i * 70;
        $(this).css('backgroundPosition','-'+ index +'px')
    })


    // 获得焦点 
    $('.downlist').focus(function() {
        $(this).css('border','2px solid #ff5c00')
    })
    // 失去焦点
    $('.downlist').blur(function() {
        $(this).css('border','')
    })



    $('.dl li input').on('focus',function() {
        $(this).css('border','2px solid #ff5c00')

    })

    $('.dl li input').on('blur',function() {
        $(this).css('border','')

        // 判断密码框长度
        var date = $(this).val()
        if(date.length <= 0) {
            $(this).css('backgroundColor','#fcf2f3')
        } else {
            $(this).css('backgroundColor','#f9f9f9')
        }
    })

    // 登录
    $('#btn').on('mouseover',function() {
        $(this).css('opacity','.3')
    })

    $('#btn').on('mouseout',function() {
        $(this).css('opacity','')
    })

})