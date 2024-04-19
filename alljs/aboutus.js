//用户信息跳转
$('.user').click(() => {
    location.assign('./userSet.html')
})

//关于我们页面
$('.o').click(() => {
    $('.about').show()
    $('.mask').show()
    $('body').css('overflow','hidden')
    window.addEventListener('wheel', function (event) {
      
    }, { passive: false });

})

$('.close-C').click(()=>{
    $('.about').hide()
    $('.mask').hide()
    $('body').css('overflow','visible')
    window.removeEventListener('wheel', function (event) {
        event.preventDefault();
    }, { passive:false });

})