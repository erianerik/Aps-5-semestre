function removeAdmin(idLogin) {
    $.ajax({
        method: "POST",
        url: $('.action-delete').text(),
        data: {
            idLogin: idLogin
        }
        }).done(function(response) {
            let result = (response == 'true');
            if(result) {
                getAdmin();
                $(".delete").fadeIn();
                    setInterval(function() {
                        $(".delete").fadeOut();
                }, 4000);
            }else {
                $(".erro").fadeIn();
                setInterval(function() {
                    $(".erro").fadeOut();
                }, 4000);
            }
        });
}

function refreshLogin(idLogin) {
    let typeAction = "show";
    $.ajax({
        method: "POST",
        url: $('.action-update').text(),
        data: {
            typeAction: typeAction,
            idLogin: idLogin
        }
    }).done(function() {
        window.location.href = "registerAdmin.html";
    });
}

function getAdmin() {
    $.ajax({
        method: "GET",
        url: $('.action').text()
        }).done(function( response ) {
            if (!response == "") {
                let admin = JSON.parse(response);
                let templateHtml;
                $.each(admin, function(index, admin) {
                    templateHtml += `
                    <tr>
                        <td>${admin.nameLogin}</td>
                        <td>${admin.typeLogin}</td>
                        <td>
                        <input type="hidden" id="input-id" value="${admin.idLogin}" />
                        <a href="#" class="update-admin">Editar</a>
                        <a href="#" class="delete-admin">Deletar</a>
                        </td>
                    </tr>
                    `
        });
    
        $(".table-pattern tbody").html(templateHtml);
        
        $(".delete-admin").click(function(deleteLogin) {
            let idLogin = $(deleteLogin.target).parent().find("#input-id").val();
            removeAdmin(idLogin);
        });
        
        $(".update-admin").click(function(loginSelected) {
            let updateLogin = $(loginSelected.target).parent().find("#input-id").val();
            refreshLogin(updateLogin);
        });

        } else {
            // templateHtml = "";
            // $(".table-pattern tbody").html(templateHtml);
            // $(".nothing-data").show();
        }
    });
}

$(function() {
    getAdmin();
});

