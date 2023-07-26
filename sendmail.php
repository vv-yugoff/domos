<?php
    use PHPMailer\PHPMailer\PHPMailer;
    use PHPMailer\PHPMailer\Exception;
     
    require_once '/PHPMailer/src/Exception.php';
    require_once '/PHPMailer/src/PHPMailer.php';
    require_once '/PHPMailer/src/SMTP.php';
     
    // Для более ранних версий PHPMailer
    //require_once '/PHPMailer/PHPMailerAutoload.php';
     
    $mail = new PHPMailer;
    $mail->CharSet = 'UTF-8';
     
    // Настройки SMTP
    $mail->isSMTP();
    $mail->SMTPAuth = true;
    $mail->SMTPDebug = 0;
     
    $mail->Host = 'ssl://smtp.gmail.com';
    $mail->Port = 465;
    $mail->Username = '';
    $mail->Password = '';
     
    // От кого
    $mail->setFrom('mail@snipp.ru', 'Snipp.ru');		
     
    // Кому
    $mail->addAddress('mail@site.com', 'Иван Петров');
     
    // Тема письма
    $mail->Subject = $subject;
     
    // Тело письма
    $body = '<p><strong>«Hello, world!» </strong></p>';
    $mail->msgHTML($body);
     
    $mail->send();

    if (!$mail->send()) {
        $message = 'Ошибка';
    } else {
        $message = 'Данные отправлены!';
    }

    $response = ['message' => $message];

    header('Content-type: application/json');
    echo json_encode($response);
?>