<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);

header('Content-Type: application/json'); // Set response type as JSON

// DB config
$host = "localhost";
$user = "root";
$pass = "";
$dbname = "newsletter_db";

// Connect
$conn = new mysqli($host, $user, $pass, $dbname);
if ($conn->connect_error) {
    die(json_encode(['success' => false, 'message' => "Connection failed: " . $conn->connect_error]));
}

// Process form
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $response = ['success' => false, 'message' => ''];
    
    $fullname = trim($_POST['fullname']);
    $email = trim($_POST['email']);
    $password = trim($_POST['password']);
    $confirm = trim($_POST['confirm-password']);

    // Additional validation (redundant with client-side but good practice)
    if (empty($fullname) || empty($email) || empty($password) || empty($confirm)) {
        $response['message'] = "All fields are required";
        echo json_encode($response);
        exit;
    }

    if ($password !== $confirm) {
        $response['message'] = "Passwords do not match";
        echo json_encode($response);
        exit;
    }

    // Check if email already exists
    $check = $conn->prepare("SELECT id FROM registers WHERE email = ?");
    $check->bind_param("s", $email);
    $check->execute();
    $check->store_result();

    if ($check->num_rows > 0) {
        $response['message'] = "Email already registered";
        echo json_encode($response);
        exit;
    }
    $check->close();

    $hashed_password = password_hash($password, PASSWORD_DEFAULT);

    $stmt = $conn->prepare("INSERT INTO registers (fullname, email, password) VALUES (?, ?, ?)");
    $stmt->bind_param("sss", $fullname, $email, $hashed_password);

    if ($stmt->execute()) {
        $response['success'] = true;
        $response['message'] = "Registration successful!";
        $response['redirect'] = "login.html"; // Tell JS where to redirect
    } else {
        $response['message'] = "Error: " . $stmt->error;
    }

    $stmt->close();
    echo json_encode($response);
    exit;
}

$conn->close();
?>