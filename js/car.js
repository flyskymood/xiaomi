$(function() {
    $('#all').change(function() {
        // 拿到全选的状态
        var chan = $(this).prop('checked');

        // 赋值给每个小文本框
        $('.col > input').prop('checked',chan)
    })

    // 小复选框发生改变
    $('.col #change').change(function() {
        if ($('.col #change:checked').length == $('.col #change').length) {
            $('#all').prop('checked',true)
        }else {
            $('#all').prop('checked',false)
        }
    })

    // 购物车商品数量
    $('.sut #add').click(function() {
        var num = $(this).siblings('input').val();
        num++
        // 赋值给文本框
        $(this).siblings('input').val(num)

        // 修改商品小计
        var p = $(this).parent().parent().siblings('.col-price').html();
        p = p.substr(0,4)

        $(this).parent().parent().siblings('.col-sun').text((p * num).toFixed(2) + '元')
        getsun()
    })

    $('.sut #reduce').click(function() {
        var num = $(this).siblings('input').val();
        if (num == 1) {
            return false
        }
        num--
        // 赋值给文本框
        $(this).siblings('input').val(num)

        // 修改商品小计
        var p = $(this).parent().parent().siblings('.col-price').text().substr(0,4)
        
        $(this).parent().parent().siblings('.col-sun').text((p * num).toFixed(2) + '元')
        getsun()
    })


    // 当文本框发生改变
    $('.itxt').change(function() {
        var txt = $(this).val()
        
        var prise = $(this).parent().parent().siblings('.col-price').text().substr(0,4)

        $(this).parent().parent().siblings('.col-sun').text((prise * txt).toFixed(2) + '元')
        getsun()
    })

    getsun()
    function getsun() {
        var sum =0 // 总件数
        var pr = 0 // 总额
        // 总件数
        $('.itxt').each(function(i,DOM) {
            sum += parseInt($(DOM).val())
        })
        $('.or').text(sum)

        // 总额
        $('.list-box .col-sun').each(function(i,els) {
            pr += parseFloat($(els).text().substr(0,4))
        })

        $('.tatal').text(pr)
    }



    // 删除商品
    $('.action').click(function() {
        $('.big').fadeIn()
        $('.cont').css('top','40%')
        $('.cont').css('left','35%')
        
    })
    
    $('#refush').on('click',function() {
        $('.big').fadeOut()
    })


    $('.top a').click(function() {
        $('.big').fadeOut()
    })


    // 模态框
    // $('.top').on('mousedown',function(e) {
    //     // 计算鼠标在盒子内的坐标
    //     var x = parseInt(e.pageX - $('.cont').offset().left)
    //     var y = parseInt(e.pageY - $('.cont').offset().top)
    //     console.log(x,y);

        
    //     $(document).on('mousemove',function(e) {
    //         var z = e.pageX - x + 'px'
    //         var l = e.pageY - y + 'px'
    //         console.log(z,l);
    //         $('.cont').css('top',z)
    //         $('.cont').css('left',l)
    //     })


    //     $(document).on('mouseup',function() {
    //         $(document).off()
    //     })

    // })

})