function removeSite(idSite) {
    $.ajax({
        method: "POST",
        url: $('.action-delete').text(),
        data: {
            idSite: idSite
        }
        }).done(function(response) {
            let result = (response == 'true');
            if(result) {
                getSites();
                $(".success").fadeIn();
                    setInterval(function() {
                        $(".success").fadeOut();
                }, 4000);
            }else {
                $(".erro").fadeIn();
                setInterval(function() {
                    $(".erro").fadeOut();
                }, 4000);
            }
        });
}

function refreshSite(idSite) {
    let typeAction = "update";
    $.ajax({
        method: "POST",
        url: $('.action-update').text(),
        data: {
            typeAction: typeAction,
            idSite: idSite
        }
    }).done(function() {
        window.location.href = "registerSite.html";
        // setCookie(PHPSESSID, -1);
    });
}

function getSites() {
    $.ajax({
        method: "GET",
        url: $('.action').text()
        }).done(function( response ) {
            if (!response == "") {
                let sites = JSON.parse(response);
                let templateHtml;
                $(".nothing-data").hide();
    
                $.each(sites, function(index, site) {
                    templateHtml += `
                    <tr>
                        <td>${site.nomeSite}</td>
                        <td>${site.urlSite}</td>
                        <td>${site.descricao}</td>
                        <td>
                        <input type="hidden" id="input-id" value="${site.idSite}" />
                        <a href="#" class="update-site">Editar</a>
                        <a href="#" class="delete-site">Deletar</a>
                        </td>
                    </tr>
                    `
        });
    
        $(".table-pattern tbody").html(templateHtml);
        
        $(".delete-site").click(function(deleteSite) {
            let idSite = $(deleteSite.target).parent().find("#input-id").val();
            removeSite(idSite);
        });
        
        $(".update-site").click(function(updateSite) {
            let idSite = $(updateSite.target).parent().find("#input-id").val();
            refreshSite(idSite);
        });
        } else {
            templateHtml = "";
            $(".table-pattern tbody").html(templateHtml);
            $(".nothing-data").show();
        }
    });
}

$(function() {
    getSites();
});

