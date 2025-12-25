<?php
session_start(); // Reanuda la sesión existente para acceder a $_SESSION
if (!isset($_SESSION['usuario'])) { // Verifica si la variable 'usuario' existe en la sesión
    header("Location: index.php"); // Si no existe (no está logueado), redirige al login
    exit; // Detiene la ejecución del script inmediatamente para seguridad
}
?>
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Bienvenido</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="login">
        <!-- htmlspecialchars convierte caracteres especiales en entidades HTML para evitar ataques XSS -->
        <h2>¡Hola, <?php echo htmlspecialchars($_SESSION['usuario']); ?>! 👋</h2>
        <p>Has iniciado sesión correctamente.</p>
        <br>
        <a href="logout.php"><button>Cerrar Sesión</button></a>
    </div>
</body>
</html>