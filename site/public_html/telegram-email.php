<?php

/* https://api.telegram.org/bot5018924912:AAEBvkDLNmKBHXpzwuOlYz4cjpgECzbk4gw/getUpdates,
где, XXXXXXXXXXXXXXXXXXXXXXX - токен вашего бота, полученный ранее */

  $emailPhone = $_POST['emailPhone'];
  $token = "5018924912:AAEBvkDLNmKBHXpzwuOlYz4cjpgECzbk4gw";
  $chat_id = "-618956066";
  $txt = "";
  $arr = array(
    'Розсилка: ' => $emailPhone,
  );

  foreach($arr as $key => $value) {
    $txt .= "<b>".$key."</b> ".$value."%0A";
  };

  $sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");




  // if ($sendToTelegram) {
  //   header('Location: thank-you.html');
  // } else {
  //   echo "Error";
  // }
?>