$(".button-pattern--submit").click(function() {

    let username = $("#user").val();
    let userPassword = $("#password").val();
    $.ajax({
        method: "POST",
        url: $(".login-content__form").attr('action'),
        data: { 
            username: username,
            password: userPassword
         }
      }).done(function(response) {
          let login = JSON.parse(response);
          if(login != false) {
            localStorage.setItem("username", login.userEmail);
            localStorage.setItem("typeUser", login.typeUser);
            localStorage.setItem("idLogin", login.idEmail);
  
            login.typeUser == "cliente" ? window.location.replace("home.html") : window.location.replace("homeAdmin.html");

          } else {
            $(".login-fail ").fadeIn();
          }
      });
});

$(function() {
  localStorage.clear();
})