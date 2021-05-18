<?php
    session_start();
    ini_set('default_charset','UTF-8');
    header('Content-Type: text/html; charset=iso-8859-1');
    $host = "localhost";
    $user="root";
    $password= "usbw";
    $banco = "aps";
    $conn = mysqli_connect($host, $user, $password, $banco);
    mysqli_set_charset($conn,"utf8");

    $typeAction = $_POST['typeAction'];  

    if($typeAction == "sendMessage") {
        $nameUser = $_POST['nameUser'];
        $message = $_POST['message'];
        $typeUser = $_POST['typeUser'];
        $queryInsertMessage = "INSERT INTO chat (nome, mensagem, tipo_usuario) VALUES ('$nameUser', '$message', '$typeUser')";
        $resultMessage = mysqli_query($conn, $queryInsertMessage);

    } elseif($typeAction == "updateChat") {
        $querySelect = "SELECT * FROM chat";
        $result = mysqli_query($conn, $querySelect);
        if ($result) {
          while ($obj = $result->fetch_object()) {
              $message = array(
              "idChat"        => $obj->id,
              "nameUser"      => $obj->nome,
              "message"       => $obj->mensagem,  
              "typeUser"      => $obj->tipo_usuario
              );
              $messages[] = $message;
          }
          echo json_encode($messages);
      }
    } elseif($typeAction == "cleanChat") {
        $queryCleanChat = "TRUNCATE TABLE chat";
        $resultMessage = mysqli_query($conn, $queryCleanChat);
      }
?>
