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
        $passwordLogin = $_POST['passwordLogin'];
        $typeLogin = $_POST['typeLogin'];

        $queryInsert = "INSERT INTO tabela_login (login, senha_login, tipo_login) VALUES ('$login', '$passwordLogin', '$typeLogin')";
        $result = mysqli_query($conn, $queryInsert);
        
        if ($result) {  
            echo "true";
        }else {
            echo "false";
        }
    }else {
        $idLogin =  $_POST['idLogin'];
        $_SESSION['idLogin'] = $idLogin;
        echo $_SESSION['idLogin'];
    }


?>