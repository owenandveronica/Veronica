$(function(){
  $('#regist').click(function(){
    location.href = '/signin';
  });

  $("#submit").click(function(){
    if ($("#username").val() && $("#password").val()) {
    }else {
      alert('填完啊..');
      return;
    };
    var data = {
      'username': $("#username").val(),
      'password': $("#password").val()
    };
    $.ajax({
      type: 'post',
      beforeSend: function(xhr, settings) {
        xhr.setRequestHeader("X-CSRFToken", csrftoken);
      },
      url: '/service/user_server/login_',
      data: data,
      success: function(res) {
        location.href = "/homepage";
      },
      error: function(err) {
        var msg = JSON.parse(err.responseText);
        if (msg.code == 3) {
          alert('用户名／密码错了');
        };
      }
    });
  });
});
