$(function() {
    $.ajax({
        method: "GET",
        url: $('.action').text()
        }).done(function( response ) {
            let sites = JSON.parse(response);
            let templateHtml;

            $.each(sites, function(index, site) {
                templateHtml += `
                <tr>
                <td>${site.nomeSite}</td>
                <td>${site.urlSite}</td>
                <td>${site.descricao}</td>
                </tr>
                `
            });
                
            $(".table-pattern tbody").html(templateHtml);
    });

});

