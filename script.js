//Aplicar clase al elemeto seleccionado
function seleccionar(link) {
    var opciones = document.querySelectorAll('#links a');
    opciones.forEach(opcion => opcion.className = "");
    link.className = "seleccionado";

    //Desaparecer el menú una vez seleccionada una opción en modo responsive
    var nav = document.getElementById("nav");
    if (nav.className === "responsive") {
        nav.className = "";
    }

    var x = document.getElementById("nav");
    x.className = "";
}

//Función que muestra el menu responsive
function responsiveMenu() {
    var x = document.getElementById("nav");
    if (x.className === "") {
        x.className = "responsive";
    } else {
        x.className = "";
    }
}

//Funcion para que puedan copiar mi mail con un click 
document.getElementById('copy-email').addEventListener('click', function() {
    var email = 'sebaberti.8@gmail.com';
    var tempInput = document.createElement('input');
    tempInput.value = email;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand('copy');
    document.body.removeChild(tempInput);
    alert('¡Correo copiado al portapapeles!');
});