<?php

$name = trim($_POST["name"]);
$email = trim($_POST["email"]);
$message = trim($_POST["message"]);

require "vendor/autoload.php";

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;

$mail = new PHPMailer(true);

// Activer le débogage SMTP (tu peux désactiver cela en production)
$mail->SMTPDebug = SMTP::DEBUG_SERVER;

$mail->isSMTP();
$mail->SMTPAuth = true;

$mail->Host = "smtp.gmail.com";
$mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
$mail->Port = 587;

$mail->Username = "formulaire.portefolio@gmail.com";
$mail->Password = "tkniygmwiekqumcn";

// Configuration de l'email
$mail->setFrom($email, $name);
$mail->addAddress("rhystrouve123@gmail.com", "Rhys");

$mail->isHTML(true); // Permet d'envoyer des emails HTML, si besoin
$mail->Subject = "Nouveau message de " . $name;
$mail->Body = "<p>Email: " . $email . "</p><p>Message: " . nl2br($message) . "</p>"; // Utilise nl2br() pour les retours à la ligne

// Envoi de l'email
if($mail->send()) {
    echo "email sent";
} else {
    echo "Erreur : " . $mail->ErrorInfo;
}

// Redirection après l'envoi
header("Location: /php/portefolio-rt/index.html");
exit;

?>
