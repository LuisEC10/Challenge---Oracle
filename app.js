document.getElementById('btn__copiar').addEventListener('click', () => {
    // Selecciona el contenido del div
    const textoParaCopiar = document.getElementById('contenido_final').innerText;
    
    // Usa la API del portapapeles para copiar el texto
    navigator.clipboard.writeText(textoParaCopiar).then(() => {
        console.log('Texto copiado al portapapeles');
    }).catch(err => {
        console.error('Error al copiar el texto: ', err);
    });
});

function clickEncriptar() {
    let contenido = document.getElementById("contenido").value;
    var parrafoEncriptado = document.getElementById("contenido_final");
    var imgContenido = document.getElementById("img_contenido");
    var fuenteContenido = document.getElementById("contenido_final");
    var btnCopiar = document.getElementById("btn__copiar");

    // Verificar texto
    if(validarTexto(contenido)){
        var textoFinal = encriptarTexto(contenido);
        if(imgContenido){
            imgContenido.remove();
            
        }
        fuenteContenido.style.fontSize = '1.5rem';
        btnCopiar.style.visibility = 'visible';
        parrafoEncriptado.innerHTML = textoFinal;
        return;
    }else {
        alert("No se aceptan ni mayúsculas ni caracteres especiales");
    }

    // Encriptar y reemplazar
    
}

function clickDesencriptar() {
    let contenido = document.getElementById("contenido").value;
    var parrafoDesencriptado = document.getElementById("contenido_final");
    var imgContenido = document.getElementById("img_contenido");
    var fuenteContenido = document.getElementById("contenido_final");
    var btnCopiar = document.getElementById("btn__copiar");

    if(validarTexto(contenido)){
        var textoFinal = dsencriptarTexto(contenido);
        if(imgContenido){
            imgContenido.remove();
        }
        fuenteContenido.style.fontSize = '1.5rem';
        btnCopiar.style.visibility = 'visible';
        parrafoDesencriptado.innerHTML = textoFinal;
        return;
    }else {
        alert("No se aceptan ni mayúsculas ni caracteres especiales");
    }

    // Desencriptar y reemplazar
    
}


function encriptarTexto(texto){
    let textEcriptado = '';

    // Comienza a reemplazar/encriptar
    for (let letra of texto) {
        if (letra === 'a') {
            textEcriptado += 'ai';
        } else if (letra === 'e') {
            textEcriptado += 'enter';
        } else if (letra === 'i') {
            textEcriptado += 'imes';
        } else if (letra === 'o') {
            textEcriptado += 'ober';
        } else if (letra === 'u') {
            textEcriptado += 'ufat';
        } else {
            textEcriptado += letra;
        }
    }

    return textEcriptado;
    
}

function dsencriptarTexto(texto) {
    let textDesencriptado = '';
    let i = 0;
    while(i<texto.length){
        if (texto.startsWith('ai', i)) {
            textDesencriptado += 'a';
            i += 2;
        } else if (texto.startsWith('enter', i)) {
            textDesencriptado += 'e';
            i += 5;
        } else if (texto.startsWith('imes', i)) {
            textDesencriptado += 'i';
            i += 4;
        } else if (texto.startsWith('ober', i)) {
            textDesencriptado += 'o';
            i += 4;
        } else if (texto.startsWith('ufat', i)) {
            textDesencriptado += 'u';
            i += 4;
        } else {
            textDesencriptado += texto[i];
            i++;
        }
    }

    return textDesencriptado;
}

function validarTexto(texto){
    const val = /^[\p{Ll}\s]*$/u;
    return val.test(texto);
}

