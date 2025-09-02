<?php

/* https://api.telegram.org/bot5018924912:AAEBvkDLNmKBHXpzwuOlYz4cjpgECzbk4gw/getUpdates,
где, XXXXXXXXXXXXXXXXXXXXXXX - токен вашего бота, полученный ранее */

  $name = $_POST['user_name'];
  $phone = $_POST['user_phone'];
  $email = $_POST['user_commer'];
  $question = $_POST['user_question'];
  $token = "5018924912:AAEBvkDLNmKBHXpzwuOlYz4cjpgECzbk4gw";
  $chat_id = "-618956066";
  $txt = "";
  $arr = array(
    'Імя користувача: ' => $name,
    'Телефон: ' => $phone,
    'Вид обєкту:' => $email,
    'Питання:' => $question,
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