let idLoginSelected = 0;

$(".button-pattern--submit").click(function() {
    let loginData = {};
    loginData.login = $("#login").val();
    loginData.password = $("#password-login").val();
    loginData.typeLogin = "admin";
    let nameButton = $(this).val();

    if(nameButton == "Alterar") {
        refreshLogin(loginData, idLoginSelected);
    } else if(nameButton == "Cadastrar") {
        registerAdmin(loginData);
    }
   
});

$(".button-pattern--cancelar").click(function() {
    window.location.href = "homeAdmin.html";
})

function registerAdmin(loginData) {
    let typeAction = "register";
    $.ajax({
        method: "POST",
        url: $(".register-website__form").attr('action'),
        data: { 
            login: loginData.login,
            passwordLogin: loginData.password,
            typeLogin: loginData.typeLogin,
            typeAction: typeAction
        }
        }).done(function(response) {
            let result = (response == 'true');
            if(result) {
                $(".insert").fadeIn();
                setTimeout(function() {
                    $(".insert").fadeOut();
                }, 4000);
            }
    });
}

function searchId() {
    let typeAction = "show";
    $.ajax({
        method: "POST",
        url: $(".action-update").text(),
        data: {
            typeAction: typeAction
        }
    }).done(function(response) {
        let login = JSON.parse(response);
        idLoginSelected = login.idLogin;
        $("#login").val(login.login);
        $("#password-login").val(login.password);
        $(".button-pattern--submit").val("Alterar");
    });
}

function refreshLogin(loginData, idLoginSelected) {
    let typeAction = "update";
    $.ajax({
        method: "POST",
        url: $(".action-update").text(),
        data: {
            idLogin: idLoginSelected,
            login: loginData.login,
            password: loginData.password,
            typeAction: typeAction
        }
    }).done(function(response) {
        let result = (response == 'true');
        if(result) {
            $(".update").fadeIn();
            setTimeout(function() {
                $(".update").fadeOut();
            }, 4000);
        }
    })
}

$(function() {
    searchId();
});