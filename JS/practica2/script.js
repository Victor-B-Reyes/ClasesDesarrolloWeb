// Referencia al contenedor donde se mostrarán las notas
const notesList = document.getElementById("notesList");

// ---------------------------------------------------------
// Cargar todas las notas guardadas en localStorage
// ---------------------------------------------------------
function loadNotes() {
    // Obtener las notas guardadas; si no hay, usar un arreglo vacío
    const notes = JSON.parse(localStorage.getItem("notes")) || [];

    // Limpiar el contenedor de notas antes de volver a pintarlas
    notesList.innerHTML = "";

    // Recorrer todas las notas y mostrarlas
    notes.forEach((note, index) => {
        // Crear un div para la nota
        const div = document.createElement("div");
        div.className = "note";

        // Insertar el texto y el botón para borrar
        div.innerHTML = `
            ${note}
            <span class="delete" onclick="deleteNote(${index})">✖</span>
        `;

        // Agregarla al contenedor
        notesList.appendChild(div);
    });
}

// ---------------------------------------------------------
// Agregar una nueva nota
// ---------------------------------------------------------
function addNote() {
    // Obtener el texto del textarea
    const text = document.getElementById("noteText").value.trim();

    // Validar que no esté vacío
    if (text === "") return alert("Escribe una nota antes de guardar.");

    // Tomar las notas actuales o un arreglo vacío
    const notes = JSON.parse(localStorage.getItem("notes")) || [];

    // Agregar la nueva nota al arreglo
    notes.push(text);

    // Guardar de vuelta en localStorage
    localStorage.setItem("notes", JSON.stringify(notes));

    // Limpiar el textarea
    document.getElementById("noteText").value = "";

    // Volver a mostrar las notas
    loadNotes();
}

// ---------------------------------------------------------
// Eliminar una nota por su índice
// ---------------------------------------------------------
function deleteNote(index) {
    // Obtener todas las notas
    const notes = JSON.parse(localStorage.getItem("notes")) || [];

    // Eliminar la nota especificada
    notes.splice(index, 1);

    // Guardar los cambios en localStorage
    localStorage.setItem("notes", JSON.stringify(notes));

    // Recargar la lista visualmente
    loadNotes();
}

// ---------------------------------------------------------
// Cargar las notas al iniciar la página
// ---------------------------------------------------------
loadNotes();
