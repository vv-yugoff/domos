<?php

    use PHPMailer\PHPMailer\PHPMailer;
    use PHPMailer\PHPMailer\Exception;
    use PHPMailer\PHPMailer\SMTP;

    require "PHPMailer/src/Exception.php";
    require "PHPMailer/src/PHPMailer.php";
    require "PHPMailer/src/SMTP.php";

    $mail = new PHPMailer(true);
	
    $mail->CharSet = "UTF-8";
    $mail->IsHTML(true); /* Разрешаем работу с HTML */

    $name = $_POST["name"];
    $email = $_POST["email"];
	// $phone = $_POST["phone"];
    // $message = $_POST["message"];
	$email_template = "template_mail.html";

    $smtp_server = "smtp.yandex.ru"; // Адрес SMTP сервера
    $smtp_username = "vv-yugov@yandex.ru"; // Логин для SMTP аутентификации
    $smtp_password = "Zydfhm13*"; // Пароль для SMTP аутентификации
    $smtp_port = 465; // Порт SMTP сервера
    $smtp_encryption = "ssl"; // Метод шифрования (ssl или tls)

    $mail->isSMTP(); // Указываем использование SMTP
    $mail->Host = $smtp_server; // Устанавливаем адрес SMTP сервера
    $mail->SMTPAuth = true; // Включаем аутентификацию SMTP
    $mail->Username = $smtp_username; // Устанавливаем имя пользователя SMTP
    $mail->Password = $smtp_password; // Устанавливаем пароль SMTP
    $mail->SMTPSecure = $smtp_encryption; // Устанавливаем метод шифрования
    $mail->Port = $smtp_port; // Устанавливаем порт SMTP сервера

    $body = file_get_contents($email_template);
	$body = str_replace('%name%', $name, $body);
	$body = str_replace('%email%', $email, $body);
	// $body = str_replace('%phone%', $phone, $body);
	// $body = str_replace('%message%', $message, $body);

    $mail->addAddress("vv-yugov@yandex.ru");   // Здесь введите Email, куда отправлять
	$mail->setFrom($email);
    $mail->Subject = "[Заявка с формы]";
    $mail->MsgHTML($body);

    if (!$mail->send()) {
        $message = "Ошибка отправки";
    } else {
        $message = "Данные отправлены!";
    }
	
	$response = ["message" => $message];

    header('Content-type: application/json');
    echo json_encode($response);


?>