<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $subject = htmlspecialchars($_POST['subject']);
    $message = htmlspecialchars($_POST['message']);

    $to = "aakritidhungel01@gmail.com"; // Your email
    $mailSubject = "New Contact Form Message: $subject";
    $body = "Name: $name\nEmail: $email\nSubject: $subject\n\nMessage:\n$message";
    $headers = "From: $email";

    if (mail($to, $mailSubject, $body, $headers)) {
        echo "<p style='text-align:center; color:green; font-weight:bold;'>Message sent successfully!</p>";
    } else {
        echo "<p style='text-align:center; color:red; font-weight:bold;'>Failed to send message. Please try again.</p>";
    }
} else {
    echo "<p style='text-align:center; color:red; font-weight:bold;'>Invalid request.</p>";
}
?>
