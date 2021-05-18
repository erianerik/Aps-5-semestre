<?php
    session_start();
    ini_set('default_charset','UTF-8');
    header('Content-Type: text/html; charset=iso-8859-1');
    $host = "localhost";
    $user="root";
    $password= "usbw";
    $banco = "aps";
    $conn = mysqli_connect($host, $user, $password, $banco);
    $conn = mysqli_connect($host, $user, $password, $banco);
    mysqli_set_charset($conn,"utf8");

    $typeAction = $_POST['typeAction'];
    $idLogin =  $_SESSION['idLogin'];
  

    if($typeAction == "show") {
        $querySelect = "SELECT * FROM tabela_login WHERE id_login = '$idLogin' ";
        $result = mysqli_query($conn, $querySelect);
        
        if (mysqli_num_rows($result)) {
            while ($obj = $result->fetch_object()) {
                $login = array(
                "idLogin"       => $obj->id_login,
                "login"         => $obj->login,
                "password"      => $obj->senha_login,
                );
                $loginSelected = (object) $login;
            }
            echo json_encode($loginSelected);
            $_SESSION['idLogin'] = 0;
        }	
    } elseif($typeAction == "update") {
        $idLogin = $_POST['idLogin'];
        $login = $_POST['login'];
        $password = $_POST['password'];
        $queryUpdate = "UPDATE tabela_login SET login = '$login', senha_login = '$password' WHERE id_login = '$idLogin'";
        $result = mysqli_query($conn, $queryUpdate);
        
        if($result) {
            echo "true";
        }else {
            echo "false";
        }
       
      } 
?>
