
var ajax=new XMLHttpRequest();
ajax.onreadystatechange = function(){
    if (this.readyState==4){
        console.log(this.status);
        console.log(this.responseText)
    }
}   
let url="http://www.cne.gov.ve/web/registro_electoral";
let recurso="/ce.php?"
let parametros="nacionalidad=V&cedula=14978131"
ajax.open("GEt",url+recurso+parametros,true);
ajax.send();
