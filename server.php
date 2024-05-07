<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $service = $_POST['service'];
    $message = $_POST['message'];

    // Recipient email address
    $to = 'bekkerdaniel68@gmail.com';
    $subject = 'New Inquiry from ' . $name;

    // Email content
    $body = "Name: $name\n";
    $body .= "Email: $email\n";
    $body .= "Service: $service\n";
    $body .= "Message:\n$message";

    // Send email
    $headers = "From: $email\r\n";
    if (mail($to, $subject, $body, $headers)) {
        echo 'Email sent successfully!';
    } else {
        echo 'Failed to send email. Please try again later.';
    }
} else {
    echo 'Invalid request.';
}
?>
