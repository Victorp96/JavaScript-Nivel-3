calcular12Porc = function (precio){
    return precio*0.12
}
calcular12Porc(1000)
var carro = {
    "marca"    : "chevrolet",
    "modelo"   : "aveo",
    "año"      : 2015,
    "precio"   : 1500,
    //a este atributo se le asigna una funcion y se convierte en un metodo.
    "mostrar"  : function(){
        console.log("El año es ",this.año)
    },
    "aumentarPrecio" : function(aumento){
        this.precio += aumento;
    },
    //un metodo puede ser una funcion que este en otra parte.
    "calcularIva" :calcular12Porc 
};
carro.dueño = "Victor"
carro.precio = 1000;
carro.aumentarPrecio(10)
console.log("el nuevo precio es ",carro.precio)
console.log(carro.calcularIva(carro.precio))

console.log("el carro es ", carro.marca);
console.log("El carro es ",carro["marca"]);
console.log("el precio del carro es ",carro.precio);
carro.mostrar();
carro["mostrar"]();