function cambiarColorBody(color){
    document.getElementById('bodyHtml').style.backgroundColor = color;
}

function contarLetras(palabra){
    let cantidadLetras = palabra.length;
    document.getElementById('textAreaCantLetras').innerText = cantidadLetras;
}

function alumnosAprobados(arrayAlumnos){
    let alumnosAprobados = arrayAlumnos.filter(alumno => alumno.nota >= 7);
    return alumnosAprobados;
}