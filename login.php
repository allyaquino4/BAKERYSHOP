<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);

header('Content-Type: application/json');

// DB config (same as register.php)
$host = "localhost";
$user = "root";
$pass = "";
$dbname = "newsletter_db";

// Connect
$conn = new mysqli($host, $user, $pass, $dbname);
if ($conn->connect_error) {
    die(json_encode(['success' => false, 'message' => "Connection failed: " . $conn->connect_error]));
}

// Process login
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $response = ['success' => false, 'message' => ''];
    
    $email = trim($_POST['email']);
    $password = trim($_POST['password']);

    // Validate inputs
    if (empty($email) || empty($password)) {
        $response['message'] = "Please fill in all fields";
        echo json_encode($response);
        exit;
    }

    // Check if user exists
    $stmt = $conn->prepare("SELECT id, fullname, password FROM registers WHERE email = ?");
    $stmt->bind_param("s", $email);
    $stmt->execute();
    $result = $stmt->get_result();

    if ($result->num_rows === 0) {
        $response['message'] = "Invalid email or password";
        echo json_encode($response);
        exit;
    }

    $register_user = $result->fetch_assoc();
    
    // Verify password
     if (password_verify($password, $register_user['password'])) {
        // Check if user exists in USERS table
        $check_user = $conn->prepare("SELECT id FROM users WHERE email = ?");
        $check_user->bind_param("s", $email);
        $check_user->execute();
        $check_user->store_result();
        
        // If not exists in users table, insert
        if ($check_user->num_rows === 0) {
            $insert_user = $conn->prepare("INSERT INTO users (register_id, email, password) VALUES (?, ?, ?)");
            $insert_user->bind_param("iss", $register_user['id'], $email, $register_user['password']);
            $insert_user->execute();
            $insert_user->close();
        }
        $check_user->close();

        // Start session
        session_start();
        $_SESSION['user_id'] = $register_user['id'];
        $_SESSION['user_email'] = $email;
        
        $response['success'] = true;
        $response['message'] = "Login successful! Welcome back, " . $register_user['fullname'];
        $response['redirect'] = "index.html";
    } else {
        $response['message'] = "Invalid email or password";
    }

    $stmt->close();
    echo json_encode($response);
    exit;
}

$conn->close();
?>