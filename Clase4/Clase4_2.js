$("#loading").hide();
$("#nombre").keyup(function(){
    $("#loading").show();
    let nombre = $("#nombre").val();
    $.ajax({
        url     :"http://www.omdbapi.com/",
        success :function(respuesta){
            console.log(respuesta)
            if (respuesta.Response==="True"){
                $("#resultado").html("Resultados encontrados: " + respuesta.totalResults + " resultados <br>");
                for (let i=0;i<respuesta.Search.length;i++){
                    $("#resultado").append("Titulo: " + respuesta.Search[i].Title+"<br>");
                    $("#resultado").append("Año: "+ respuesta.Search[i].Year+"<br>");
                    $("#resultado").append("<img src=" + respuesta.Search[i].Poster+"><br>")
                }
            }else{
                $("#resultado").html("Error al conectarse");
            }
        },
        data    :{
            s       : nombre,
            apikey  : "dc1d45d2"
        },
        error   :function(){
            console.log("error")
        },
        complete:function(){
            $("#loading").hide();
        },
        timeout :3000,
        type    :"get",
        dataType:"JSON"
    })
});