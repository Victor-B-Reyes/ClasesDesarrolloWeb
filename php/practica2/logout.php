<?php
session_start(); // Necesario iniciar/reanudar la sesión antes de poder destruirla
session_destroy(); // Elimina toda la información registrada en la sesión actual
header("Location: index.php"); // Redirige al usuario de vuelta al formulario de login
exit; // Buena práctica para asegurar que no se ejecute más código
?>