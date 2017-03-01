$(function(){
  // var url = location.pathname;
  // var is_index = (/^\/index\w*/).test(location.pathname);
  // var is_signin = (/^\/signin\w*/).test(location.pathname);
  // var is_homepage = (/^\/homepage\w*/).test(location.pathname);

  // get CSRF token
  function getCookie(name) {
    var cookieValue = null;
    if (document.cookie && document.cookie != '') {
      var cookies = document.cookie.split(';');
      for (var i = 0; i < cookies.length; i++) {
        var cookie = jQuery.trim(cookies[i]);
        // Does this cookie string begin with the name we want?
        if (cookie.substring(0, name.length + 1) == (name + '=')) {
          cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
          break;
        }
      }
    }
    return cookieValue;
  };
  window.csrftoken = getCookie('csrftoken');

  // get username in cookie
  // var cookie_raw = document.cookie.split(';');
  // var cookie_ripe = {};
  // for (var i = 0; i <= cookie_raw.length - 1; i++) {
  //   var temp = cookie_raw[i].split('=');
  //   cookie_ripe[temp[0]] = temp[1];
  // };
  // if (cookie_ripe.username) {
  //   $.ajax({
  //     type: 'post',
  //     beforeSend: function(xhr, settings) {
  //       xhr.setRequestHeader("X-CSRFToken", csrftoken);
  //     },
  //     url: '/service/user_server/check_auth',
  //     data: {
  //       username: cookie_ripe.username
  //     },
  //     success: function(res) {
  //       if (res.success) {
  //         if (is_index || is_signin) {
  //           location.href = "/homepage";
  //         };
  //       };
  //     },
  //     error: function(err) {
  //       if (is_homepage) {
  //         alert('认证失败，请重新登录');
  //         location.href = "/index";
  //       };
  //     }
  //   });
  // }else if (!cookie_ripe.username){
  //   if (is_homepage) {
  //     // location.href = "/index";
  //   }
  // }
});
