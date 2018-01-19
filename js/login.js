// 获取验证码，页面加载显示验证码信息
var changecode = 0;
$(".vercode").click(function() {
    changecode++;
    console.log(this.src);
    this.src = "http://192.168.2.228:8080/car-management/user/code.action?changecode=" + changecode;
})

var pass = document.getElementsByClassName("pass_input")[0];
$(document).ready(function() {
    // 浏览器页面的宽和高
    //  document.body.clientWidth
    // 密码是否可见
    var flag = false;
    //  $(".eye_logo").click(function() {
    //      if (flag == false) {
    //          $(".eye_logo").attr("class", "eye_logo glyphicon glyphicon-eye-open");
    //          pass.type = "text";
    //          flag = true;
    //      } else {
    //          $(".eye_logo").attr("class", "eye_logo glyphicon glyphicon-eye-close");

    //          pass.type = "password";
    //          flag = false;
    //      }
    //  });
    //密码验证
    //  $(".pass_input").bind('input porpertychange', function() {
    //      var tips = document.getElementsByClassName("tips")[0];
    //      var pw1Num = $(this).val();
    //      // var re = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z\d]{6,16}$/g; //密码必须有大小写字母和数字且6-20位
    //      var re = /^[0-9a-zA-Z_]{6,16}$/g; //密码由大小写字母或数字组成且为6-20位
    //      var rez = re.test(pw1Num);
    //      console.log(pw1Num);
    //      if (rez == true) {
    //          tips.style.display = 'block';
    //          tips.innerHTML = '格式正确';
    //      } else if (pw1Num == '') {
    //          tips.style.display = 'block';
    //          tips.innerHTML = '密码不能为空';
    //      } else {
    //          tips.style.display = 'block';
    //      }
    //  });

    // 点击登录按钮进行判断
    // window.sessionStorage.LoginStatus = "false";
    sessionStorage.setItem("LoginStatus", false);
    $(".login_btn").click(function() {
        console.log($(".vercode_input").val());
        // $.ajax({
        //     url: "http://192.168.2.228:8080/car-management/user/login.action?username=" + $(".user_input").val() + "&password=" + $(".pass_input").val() + "&verifyCode=" + $(".vercode_input").val(),
        //     type: "get",
        //     // data: {
        //     //     username: $(".user_input").val(),
        //     //     password: $(".pass_input").val(),
        //     //     verifyCode: $(".vercode_input").val()
        //     // },
        //     success: function(res) {
        //         console.log(res);
        //     }
        // })
        $.get("http://192.168.2.228:8080/car-management/user/login.action?username=" + $(".user_input").val() + "&password=" + $(".pass_input").val() + "&verifyCode=" + $(".vercode_input").val(), function(result) {
            // $("div").html(result);
            console.log(result);
        });
        console.log($(".vercode_input").val());

    })
})