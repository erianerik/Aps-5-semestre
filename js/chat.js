let mustUpadateChat = false;

function updateChat() {
    $.ajax({
        method: "POST",
        url: $(".chat-form").attr('action'),
        data: {
            typeAction: "updateChat"
        }
    }).done(function (response) {
        let messages = JSON.parse(response);
        let templateHtml = '';
        $.each(messages, function (i, message) {
            if (message.typeUser == "cliente" && message.idChat != i) {
                templateHtml += `
                <div class="chat__body__message chat__body__message--user box-message">
                    <p class="chat__body__message__text-user text">${message.message}</p>
                </div>
                `
            } else {
                templateHtml += `
                <div class="chat__body__message chat__body__message--receiver">
                 <p class="chat__body__message__text-receiver">${message.message}</p>
                </div>
                `

            }
        });
        $(".chat__body").html(templateHtml);
    });
}

$(".trash").click(function () {
    cleanChat();
})


$(".chat-icon").click(function () {
    $(".chat").fadeIn();
    $('.chat').animate({
        scrollTop: $(".chat").offset().top = 1000
    }, 1500);
    mustUpadateChat = true;

});

$(".close").click(function () {
    $(".chat").fadeOut();
    mustUpadateChat = false;
});

$(".button-pattern--chat").click(function () {
    sendMessage();
});

$(".input-pattern").keydown(function (event) {
    if (event.keyCode == 13) {
        sendMessage();
        return false;
    }
});

setInterval(function () {
    if (mustUpadateChat) {
        updateChat();
    }
}, 1000);

function sendMessage() {
    let chat = {};
    chat.nameUser = localStorage.getItem("username");
    chat.typeUser = localStorage.getItem("typeUser");
    chat.message = $("#message").val();
    chat.typeAction = "sendMessage";

    $.ajax({
        method: "POST",
        url: $(".chat-form").attr('action'),
        data: {
            nameUser: chat.nameUser,
            typeUser: chat.typeUser,
            message: chat.message,
            typeAction: chat.typeAction
        }
    }).done(function () {
        $('.chat').animate({
            scrollTop: $(".chat").offset().top = 9999999
        }, 1500);
    });

    $("#message").val("");
}

function cleanChat() {
    $.ajax({
        method: "POST",
        url: $(".chat-form").attr('action'),
        data: {
            typeAction: "cleanChat"
        }
    }).done(function (response) {
        console.log(response);
    });
}