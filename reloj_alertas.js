/*
Implementar la funcion iniciarReloj()
La funcion debe mostrar la hora actual usando window.alert()
La hora debe actualizarse y mostrarse cada minuto.
Asegúrense de que la primera alerta se muestre inmediatamente al llamar a la función.
Utilicen window.setTimeout() y window.setInterval() para programar las actualizaciones.
*/
function mostrarHora() {
    const ahora = new Date();
    const horas = ahora.getHours().toString().padStart(2, '0');
    const minutos = ahora.getMinutes().toString().padStart(2, '0');
    const segundos = ahora.getSeconds().toString().padStart(2, '0');
    const horaActual = `${horas}:${minutos}:${segundos}`;
    window.alert(horaActual);
}

function iniciarReloj(intervalo) {
    mostrarHora();
    window.setInterval(mostrarHora, intervalo);
}

iniciarReloj(5000);