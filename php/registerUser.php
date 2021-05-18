<?php
    session_start();
    ini_set('default_charset','UTF-8');
    header("Content-type: text/html; charset=utf-8");
    $host = "localhost";
    $user="root";
    $password= "usbw";
    $banco = "aps";
    $conn = mysqli_connect($host, $user, $password, $banco);
    mysqli_set_charset($conn,"utf8");
    
    $typeAction = $_POST['typeAction'];

    if($typeAction == 'register') {
        $login = $_POST['login'];
        $password = $_POST['password'];
        $typeLogin = "cliente";
        $queryInsert = "INSERT INTO tabela_login (login, senha_login, tipo_login) VALUES ('$login', '$password', '$typeLogin')";
        $result = mysqli_query($conn, $queryInsert);
        
        if ($result) {  
            echo "true";
        }else {
            echo "false";
        }
    } elseif($typeAction == 'search') {
        $idLogin = $_POST['idLogin'];
        $querySelected = "SELECT * FROM tabela_login where id_login = '$idLogin'";
        $result = mysqli_query($conn, $querySelected);

        if (mysqli_num_rows($result)) {
            while ($obj = $result->fetch_object()) {
                $login = array(
                "idLogin"         => $obj->id_login,
                "nameLogin"       => $obj->login,
                "password"       => $obj->senha_login
                );
                $loginSelected = (object) $login;
    
            }
            echo json_encode($loginSelected);
      }	
    }

?>