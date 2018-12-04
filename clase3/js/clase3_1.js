
$("#boton-menu").click(
    function(){
        // $(".container").fadeToggle("slow"); lo muestra o lo oculta dependiendo del caso
        $(".container").slideToggle("slow"); //tipo persiana
    }
)

n=0;
$(".central-boton").click(function(){

    // $(this.parentNode).fadeOut("slow");

    $(this.parentNode).animate({"width":"500"},
        function(){
            $(this).css({"background-color":"red"});
            $(this).fadeOut("slow");
            n++;
            if (n==6)
                $(".container").slideToggle(500);
        }
    );
})


// $(".img-responsive").mouseover(
//     function (){
//         $(this).fadeOut("slow")
//     }
// )
// $(".img-responsive").mouseout(
//     function (){
//         $(this).fadeIn("slow")
//     }
// )

$(".oculta").hide();
$(".oculta").on(
    {
        "mouseout":
            function (){
                $(this).fadeOut("slow",function(){
                    $(this.previousSibling).fadeIn("slow")
                })
                
        }
    }
)
$(".img-responsive").on(
    {
        "mouseenter":
            function (){
                let p=this.nextSibling;
                $(this).fadeOut("slow",function(){
                    $(p).fadeIn("slow")
                })
                
            }
    }
)