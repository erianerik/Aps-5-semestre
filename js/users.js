
function getClient() {
    $.ajax({
        method: "GET",
        url: $('.action').text()
    }).done(function( response ) {
            if (!response == "") {
            let client = JSON.parse(response);
            let templateHtml;
            $.each(client, function(index, client) {
                templateHtml += `
                    <tr>
                        <td>${client.nameLogin}</td>
                        <td>${client.typeLogin}</td>
                    </tr>
                    `
            });

            $(".table-pattern tbody").html(templateHtml);
        }
    });
}

$(function() {
    getClient();
});
