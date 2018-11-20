
$(document).ready(
    function(){
        console.log("se cargo la pagina")
        document.body.style.background="red";
    }
)
//Cuando haga click en cualquier h2, se ejecuta esa funcion con un alert mostrando el contenido del h2
$("h2").click(function(){
    alert(this.innerHTML)
})
$("#subtitulo").click(function(){
   $("ol").hide();
})
$("div h2").click(function(){
    console.log("hola Victor")
})
$("#agregar").click(function(){
    let dato = prompt("Introduzca un texto:");
    $("ol").append("<li>"+dato+"</li>");
})