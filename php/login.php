<?PHP
    session_start();
    ini_set('default_charset','UTF-8');
    header("Content-type: text/html; charset=utf-8");
    $host = "localhost";
    $user="root";
    $password= "usbw";
    $banco = "aps";
    $conn = mysqli_connect($host, $user, $password, $banco);
    $conn = mysqli_connect($host, $user, $password, $banco);
    mysqli_set_charset($conn,"utf8");
    
    $username = $_POST['username'];
    $password = $_POST['password'];

    $querySelect = "SELECT * FROM tabela_login WHERE login = '$username' AND senha_login = '$password' ";
    $result = mysqli_query($conn, $querySelect);

    if (mysqli_num_rows($result)) {
        while ($obj = $result->fetch_object()) {
            $login = array(
            "idEmail"        => $obj->id_login,
            "userEmail"      => $obj->login,
            "typeUser"       => $obj->tipo_login
            );
            $loginSelected = (object) $login;
        }
        echo json_encode($loginSelected);
    }else {
        echo "false";
    }

?>