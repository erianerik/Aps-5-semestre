let idSiteSelected = 0;

$(".button-pattern--submit").click(function() {

    let nameSite = $("#name-site").val();
    let urlSite = $("#url-site").val();
    let descriptionSite = $("#description-site").val();
    let nameButton = $(this).val();

    if(nameButton == "Alterar") {
        refreshSite(idSiteSelected, nameSite, urlSite, descriptionSite);
    } else if(nameButton == "Cadastrar") {
        registerSite(nameSite, urlSite, descriptionSite);
    }
   
});

$(".button-pattern--cancelar").click(function() {
    console.log("alo");
    window.location.href = "sites.html";
})

function searchId() {
    $.ajax({
        method: "GET",
        url: $(".register-website__form").attr('action'),
    }).done(function(idSite) {
        showDataSite(idSite);
    });
}

function registerSite(nameSite, urlSite, descriptionSite) {
    let typeAction = "register";
    $.ajax({
        method: "POST",
        url: $(".register-website__form").attr('action'),
        data: { 
            nameSite: nameSite,
            urlSite: urlSite,
            descriptionSite: descriptionSite,
            typeAction: typeAction
        }
        }).done(function(response) {
            let result = (response == 'true');
            if(result) {
                $(".success").fadeIn();
                setTimeout(function() {
                    $(".success").fadeOut();
                }, 4000);
            }
    });
}

function showDataSite(idSite) {
    let typeAction = "show";
    $.ajax({
        method: "POST",
        url: $(".action-update").text(),
        data: {
            idSite: idSite,
            typeAction: typeAction
        }
    }).done(function(site) {
        let siteSelected = JSON.parse(site);
        idSiteSelected = siteSelected.idSite;
        $("#name-site").val(siteSelected.nomeSite);
        $("#url-site").val(siteSelected.urlSite);
        $("#description-site").val(siteSelected.descricao);
        $(".button-pattern--submit").val("Alterar");
    })
}

function refreshSite(idSite, nameSite, urlSite, descriptionSite) {
    let typeAction = "update";
    $.ajax({
        method: "POST",
        url: $(".action-update").text(),
        data: {
            idSite: idSite,
            nameSite: nameSite,
            urlSite: urlSite,
            descriptionSite: descriptionSite,
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