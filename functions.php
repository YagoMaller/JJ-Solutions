<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $name    = $_POST['name']    ?? '';
    $email   = $_POST['email']   ?? '';
    $phone   = $_POST['phone']   ?? '';
    $service = $_POST['service'] ?? '';
    $details = $_POST['details'] ?? '';

    $to      = 'contact@example.com'; // Replace with real destination
    $subject = 'New contact request';
    $message = "Name: $name\nEmail: $email\nPhone: $phone\nService: $service\nDetails: $details";
    $headers = "From: $email";

    mail($to, $subject, $message, $headers);
    echo 'Message sent';
} else {
    http_response_code(405);
    echo 'Method not allowed';
}

