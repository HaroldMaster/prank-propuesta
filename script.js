function acepto(){
    var mensaje = document.createElement("div");
    mensaje.innerHTML="Sabía que dirías que sí :)";
    document.body.appendChild(mensaje);
}
function mover(){
    var aleatorio_x= Math.floor(Math.random()*(450)); 
    var aleatorio_y= Math.floor(Math.random()*(450)); 
    var boton = document.querySelector(".btn-no");
    boton.style.position="absolute";
    boton.style.top= aleatorio_x+"px";
    boton.style.left=aleatorio_y+"px";
    console.log(aleatorio_y + " " + aleatorio_x)
    
}