<?php

if (isset($_POST['text'])) {$text = $_POST['text'];} else {$text = "ERROR";};

$to = "smitevils@yandex.ru"; /*УКАЗАТЬ СВОЙ АДРЕС! rait1@list.ru*/

$headers = "Content-type: text/plain; charset = utf-8";

$subject = "Alert! - myrelationship.ru";

$message = "Проверить и добавить слово - myrelationship.ru:\nСообщение: $text";

$send = mail ($to, $subject, $message, $headers);

?>