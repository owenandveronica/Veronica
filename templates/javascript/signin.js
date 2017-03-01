$(document).ready(function() {
  $('#signin').click(function() {

    if ($('#password_1').val() !== $('#password_2').val()) {
      alert('两次密码输入不相同');
      return;
    };
    if (!$('#username').val() || !$('#password_1').val() || !$('#email').val()) {
      alert('请填写所有信息');
      return;
    }

    var data = {
      "username" : $('#username').val(),
      "password" : $('#password_1').val(),
      "email" : $('#email').val()
    };

    $("#signin").attr("disabled", true);

    $.ajax({
      type: 'post',
      beforeSend: function(xhr, settings) {
        xhr.setRequestHeader("X-CSRFToken", csrftoken);
      },
      url: '/service/user_server/signin',
      data: data,
      success: function(data) {
        if (data.success) {
          $('#prompt').show();
          var t = setTimeout(function jump() {
            window.location.href = '/index'
          }, 2000)
        };
      },
      error: function(err) {
        var msg = JSON.parse(err.responseText);
        if (msg.code == 1) {
          alert('用户名已存在');
          $('#password_1').val("");
          $('#password_2').val("");
        } else if (msg.code == 2) {
          alert('邮箱已存在');
          $('#password_1').val("");
          $('#password_2').val("");
        };
       $("#signin").attr("disabled", false); 
      }
    });
  });
});
