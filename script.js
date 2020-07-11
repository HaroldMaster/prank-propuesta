function acepto(){
    var mensaje = document.querySelector(".respuesta");
    mensaje.style.display="block";
    var limpiar_div = document.querySelector("div");
    limpiar_div.style.display="none"
    var limpiar_btn = document.querySelector("button");
    limpiar_btn.style.display="none"
}
function mover(){
    var aleatorio_x= Math.floor(Math.random()*(100)); 
    var aleatorio_y= Math.floor(Math.random()*(100)); 
    var boton = document.querySelector(".btn-no");
    boton.style.position="absolute";
    boton.style.top= aleatorio_x+"%";
    boton.style.left=aleatorio_y+"%";
    console.log(aleatorio_y + " " + aleatorio_x);
    console.log(w + " " +h);
    
}
