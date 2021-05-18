<?PHP
    ini_set('default_charset','UTF-8');
    header('Content-Type: text/html; charset=iso-8859-1');
    $host = "localhost";
    $user="root";
    $password= "usbw";
    $banco = "aps";
    $conn = mysqli_connect($host, $user, $password, $banco);
    mysqli_set_charset($conn,"utf8");
    $querySelect = "SELECT * FROM tabela_login WHERE tipo_login = 'cliente'";
    $result = mysqli_query($conn, $querySelect);

   
    if (mysqli_num_rows($result)) {
        while ($obj = $result->fetch_object()) {
            $login = array(
            "idLogin"         => $obj->id_login,
            "nameLogin"       => $obj->login,
            "typeLogin"       => $obj->tipo_login
            );
            $logins[] = $login;

        }
        echo json_encode($logins);
  }	


?>