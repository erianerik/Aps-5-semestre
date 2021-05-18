<?php
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
    
    $typeAction = $_POST['typeAction'];
    
    echo $_SESSION['idSiteEdit'];
    if($typeAction == 'register') {
        $nameSite = $_POST['nameSite'];
        $urlSite = $_POST['urlSite'];
        $descriptionSite = $_POST['descriptionSite'];
        utf8_decode($descriptionSite);

        $queryInsert = "INSERT INTO tabela_site (nome_site, url_site, descricao_site) VALUES ('$nameSite', '$urlSite', '$descriptionSite')";
        $result = mysqli_query($conn, $queryInsert);
        
        if ($result) {
            echo "true";
        }else {
            echo "false";
        }
    }else {
        $idSite =  $_POST['idSite'];
        $_SESSION['idSiteEdit'] = $idSite;
        echo $_SESSION['idSiteEdit'];

    }


?>