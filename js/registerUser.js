let idLoginSelected = 0;

$(".button-pattern--submit").click(function() {
    let user = {};
    user.login = $("#login").val();
    user.password = $("#password-login").val();

    let nameButton = $(this).val();
    if(nameButton == "Alterar") {
        refreshUser(idLoginSelected, user);
    } else if(nameButton == "Cadastrar") {
        registerUser(user);
    }
   
});

$(".button-pattern--cancelar").click(function() {
    if (localStorage.getItem("idLogin")) {
        window.location.href = "sites.html";

    }else {
        window.location.href = "index.html";
    }
})

function registerUser(user) {
    let typeAction = "register";
    $.ajax({
        method: "POST",
        url: $(".register-website__form").attr('action'),
        data: { 
            login: user.login,
            password: user.password,
            typeAction: typeAction
        }
        }).done(function(response) {
            let result = (response == 'true');
            if(result) {
                $(".user").fadeIn();
                setTimeout(function() {
                    $(".user").fadeOut();
                }, 4000);
            }
    });
}

function searchId() {
    let typeAction = "search";
    idLoginSelected = localStorage.getItem("idLogin");
    $.ajax({
        method: "POST",
        url: $(".register-website__form").attr('action'),
        data: {
            idLogin: idLoginSelected,
            typeAction: typeAction
        }
    }).done(function(response) {
        let user = JSON.parse(response);
        $("#login").val(user.nameLogin);
        $("#password-login").val(user.password);
        $(".button-pattern--submit").val("Alterar");
    });
}

function refreshUser(idLoginSelected, user) {
    let typeAction = "update";
    $.ajax({
        method: "POST",
        url: $(".action-update").text(),
        data: {
            idLogin: idLoginSelected,
            login: user.login,
            password:  user.password,
            typeAction: typeAction
        }
    }).done(function(response) {
        console.log(response);
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