 document.getElementById("formLogin").addEventListener("submit", function(e) {
        e.preventDefault();

        let usuario = document.getElementById("usuario").value;
        let clave = document.getElementById("clave").value;

        if (usuario === "" || clave === "") {
            document.getElementById("mensaje").innerHTML = "Completa todos los campos";
            return;
        }

        fetch("login.php", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: "usuario=" + encodeURIComponent(usuario) + "&clave=" + encodeURIComponent(clave)
        })
        .then(respuesta => respuesta.json())
        .then(data => {
            if (data.success) {
                window.location.href = data.redirect;
            } else {
                document.getElementById("mensaje").innerHTML = data.message;
            }
        });
    });