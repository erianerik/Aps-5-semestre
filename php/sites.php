<?PHP
    ini_set('default_charset','UTF-8');
    header('Content-Type: text/html; charset=iso-8859-1');
    $host = "localhost";
    $user="root";
    $password= "usbw";
    $banco = "aps";
    $conn = mysqli_connect($host, $user, $password, $banco);
    mysqli_set_charset($conn,"utf8");
    $querySelect = "SELECT * FROM tabela_site";
    $result = mysqli_query($conn, $querySelect);

    if (mysqli_num_rows($result)) {
        while ($obj = $result->fetch_object()) {
            $site = array(
            "idSite"         => $obj->id_site,
            "nomeSite"       => $obj->nome_site,
            "urlSite"        => $obj->url_site,  
            "descricao"      => $obj->descricao_site
            );
            $sites[] = $site;

        }
        echo json_encode($sites);
  }	


?>