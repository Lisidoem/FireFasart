//手机号校正
$('.phoneNum').change((e) => {
    const phoneReg = /^[1][3,4,5,6,7,8,9][0-9]{9}$/
    var isTure = phoneReg.test(e.target.value)
    if (isTure == false) {
        $('.alert-p').show()
    } else {
        $('.alert-p').hide()
    }
})

//验证码发送
$('.getcode').click(() => {
    var ispMood = $('.alert-p').css('display')
    var pMood = $('.phoneNum').val()

    if (ispMood === "none" && pMood !== "") {
        alert("验证码发送成功！")
    } else {
        alert("请输入正确的手机号码！")
    }
})

//密码显示
var isShow1 = false
var isShow2 = false
$('.isPassword-no1').click(() => {

    if (isShow1 == false) {
        $('.isPassword-no1').addClass('isPassword-yes1')
        $('.isPassword-no1').removeClass('isPassword-no1')
        isShow1 = true
        $('.ps1').attr('type', 'text')
    }
    else {
        $('.isPassword-yes1').addClass('isPassword-no1')
        $('.isPassword-yes1').removeClass('isPassword-yes1')
        isShow1 = false
        $('.ps1').attr('type', 'password')
    }
})

$('.isPassword-no2').click(() => {

    if (isShow2 == false) {
        $('.isPassword-no2').addClass('isPassword-yes2')
        $('.isPassword-no2').removeClass('isPassword-no2')
        isShow2 = true
        $('.ps2').attr('type', 'text')
    }
    else {
        $('.isPassword-yes2').addClass('isPassword-no2')
        $('.isPassword-yes2').removeClass('isPassword-yes2')
        isShow2 = false
        $('.ps2').attr('type', 'password')
    }
})

//密码校正
$('.ps1').change((e) => {
    const passwordReg = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[`~!@#$%^&*()_+<>?:"{},.\/\\;'[\]])[A-Za-z\d`~!@#$%^&*()_+<>?:"{},.\/\\;'[\]]{8,}$/;
    var isTure = passwordReg.test(e.target.value)
    if (isTure == false) {
        $('.alert-pw').show()
    } else {
        $('.alert-pw').hide()
    }
})

//两次输入密码不一致无法重置密码
$('.ps2').change(function () {
    var ps1 = $('.ps1').val()
    var ps2 = $('.ps2').val()
    if (ps1 !== ps2) {
        $('.alert').show()
    } else {
        $('.alert').hide()
    }
})


//遍历数组进行匹配
if(window.localStorage.userArr){
    var array = JSON.parse(window.localStorage.userArr);
}
else{
    var array=[];
}
let headindex=0;

$('.phoneNum').change((e) => {

    //遍历数组进行匹配
    for (var i = 0; i < array.length; i++) {
        if (e.target.value == array[i].username) {
            //有这个账号
            isHad = true;
            index = i;
            headindex = array[i].headindex 
            if(headindex==1){
                $('#avator').attr('src', './img/userhead1.webp')
            }else if(headindex==2){
                $('#avator').attr('src', './img/userhead2.webp')
            }else if(headindex==3){
                $('#avator').attr('src', './img/userhead3.webp')
            }else if(headindex==4){
                $('#avator').attr('src', './img/userhead4.webp')
            }else if(headindex==5){
                $('#avator').attr('src', './img/userhead5.webp')
            }else if(headindex==6){
                $('#avator').attr('src', './img/userhead6.webp')
            }else{
                $('#avator').attr('src', './img/uShead.png')
            }
            
        }
    }
})

//保存用户信息
$('.submit').click((event) => {
    var phoneNum = $('.phoneNum').val()
    var code = $('.code').val()
    var psw1 = $('.ps1').val()
    var psw2 = $('.ps2').val()
    var uNmood = $('.alert-p').css('display')
    var pW1mood = $('.alert-pw').css('display')
    var pW2mood = $('.alert').css('display')
    if (phoneNum == "" || code == "" || psw1 == "" || psw2 == "") {
        return
    }
    //出现警报不能注册
    if (uNmood === "block" || pW1mood === "block" || pW2mood === "block") {
        event.preventDefault()
        return
    }

    if (window.localStorage.userArr) {
        //判断是否存在
        var array = JSON.parse(window.localStorage.userArr);
    } else {
        array = [];//创建一个新数组
    }

    var username = $('.phoneNum').val()
    var password = $('.ps2').val()
    const user = {
        username,
        password,
        headindex
    }

    //遍历数组进行匹配
    var sum = 0
    for (var i = 0; i < array.length; i++) {
        //判断是否有相同账号
        if (username == array[i].username) {
            array.push(user);
            window.localStorage.userArr = JSON.stringify(array);
            alert("密码重置成功!");
            break;
        } else {
            sum++
        }
    }

    if (sum == array.length) {
        alert("该账号未注册!")
        event.preventDefault()
    }
})


