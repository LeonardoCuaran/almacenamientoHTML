//Crear un eventListener

let botonAlmacenar = document.getElementById("btnAlmacenar");

botonAlmacenar.addEventListener('click', ()=>{
        //almacenar un dato en sessionStorage

        sessionStorage.setItem('nombre','Leo');
        sessionStorage.setItem('apellido','Cuaran')

        localStorage.setItem('nombre','Leo');
        localStorage.setItem('apellido','Cuaran');
    });

let botonBorrar = document.getElementById("btnBorrar");

botonBorrar.addEventListener('click', function (){
    sessionStorage.clear();
    localStorage.clear();
})


function construirFilas (){

    //crear arreglo con las fuentes de datos

    let fuentes = [localStorage,sessionStorage];

    for(let k=0;k<fuentes.length;k++){

        let fuenteActual = fuentes [k];

    for(let i=0; i<fuenteActual.length;i++){
    let cuerpoTabla = document.getElementById("cuerpoTabla");
    let fila = document.createElement("tr");
    
    let celda = document.createElement("td");
    let texto =document.createTextNode(fuenteActual.key(i));
    celda.appendChild(texto);
    fila.appendChild(celda);
    

    celda = document.createElement("td");
    let valor = sessionStorage.getItem(fuenteActual.key(i));
    texto = document.createTextNode(valor);
    celda.appendChild(texto);
    fila.appendChild(celda);
    
    cuerpoTabla.appendChild(fila);
    }
}
}
construirFilas();