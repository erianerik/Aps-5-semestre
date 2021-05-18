<?PHP
    ini_set('default_charset','UTF-8');
    $host = "localhost";
    $user="root";
    $password= "usbw";
    $banco = "aps";
    $conn = mysqli_connect($host, $user, $password, $banco);
    $conn = mysqli_connect($host, $user, $password, $banco);
    mysqli_set_charset($conn,"utf8");

    $idUsuario = $_POST['idUsuario'];

    $querySelect = "DELETE FROM tabela_usuario WHERE id_usuario = '$idUsuario'";
    $result = mysqli_query($conn, $querySelect);

    if ($result) {
        echo "true";
    }else {
        echo "false";
    }

?>