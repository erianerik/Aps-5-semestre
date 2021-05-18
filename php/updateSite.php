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

    $idSite = $_POST['idSite'];
    $typeAction = $_POST['typeAction'];
    

    if($typeAction == "show") {
            $querySelect = "SELECT * FROM tabela_site WHERE id_Site = '$idSite' ";
            $result = mysqli_query($conn, $querySelect);
            
            if (mysqli_num_rows($result)) {
                while ($obj = $result->fetch_object()) {
                    $site = array(
                    "idSite"         => $obj->id_site,
                    "nomeSite"       => $obj->nome_site,
                    "urlSite"        => $obj->url_site,  
                    "descricao"      => utf8_encode($obj->descricao_site),
                    );
                    $sites[] = $site;
                    $sites = (object) $site;
                }
                echo json_encode($sites);
          }	
    } elseif($typeAction == "update") {
        $idSite = $_POST['idSite'];
        $nameSite = $_POST['nameSite'];
        $urlSite = $_POST['urlSite'];
        $descriptionSite = $_POST['descriptionSite'];
        utf8_decode($descriptionSite);
        $queryUpdate = "UPDATE tabela_site SET nome_site = '$nameSite', url_site = '$urlSite', descricao_site = '$descriptionSite' WHERE id_Site = '$idSite' ";
        $result = mysqli_query($conn, $queryUpdate);
        
        if($result) {
            echo "true";
        }else {
            echo "false";
        }
       
      } 
?>
