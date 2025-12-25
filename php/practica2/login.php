<?php
session_start(); // Inicia la sesión para poder guardar variables entre páginas (como el usuario logueado)
header('Content-Type: application/json'); // Indica al navegador que la respuesta será en formato JSON, no HTML

$usuarioCorrecto = "admin";
$claveCorrecta = "1234";

// El operador '??' (fusión de null) asigna '' si $_POST['usuario'] no existe o es null
$usuario = $_POST['usuario'] ?? '';
$clave = $_POST['clave'] ?? '';

$response = ['success' => false, 'message' => ''];

if ($usuario === $usuarioCorrecto && $clave === $claveCorrecta) {
    $_SESSION['usuario'] = $usuario; // Guardamos el usuario en la sesión del servidor
    $response['success'] = true;
    $response['redirect'] = 'welcome.php';
} else {
    $response['message'] = "<span style='color:red'>Usuario o contraseña incorrectos ❌</span>";
}

echo json_encode($response); // Convierte el array de PHP a un string JSON para que JS lo entienda
?>
