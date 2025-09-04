<?php

/* https://api.telegram.org/bot5018924912:AAEBvkDLNmKBHXpzwuOlYz4cjpgECzbk4gw/getUpdates,
где, XXXXXXXXXXXXXXXXXXXXXXX - токен вашего бота, полученный ранее */

  $onlyPhone = $_POST['onlyPhone'];
  $token = "8406421868:AAHvY61B2wvQIg0XRJ6ddxv4q5tYWu7p-ks";
  $chat_id = "-1003064881816";
  $txt = "";
  $arr = array(
    'Тільки телефон: ' => $onlyPhone,
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