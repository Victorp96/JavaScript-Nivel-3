
var alumnos=[
    {
        nombre  :"Victor Perez",
        cursos  :[
            {
                nombre  :"javascript",
                notas   :[
                    10,20,30
                ]
            },
            {
                nombre  :"typescript",
                notas   :[
                    30,50,80
                ]
            }
        ]
    },
    {
        nombre  :"Maria Perez",
        cursos  :[
            {
                nombre  :"javascript",
                notas   :[
                    10,20,30
                ]
            },
            {
                nombre  :"HTML",
                notas   :[
                    30,50,80
                ]
            }
        ]
    }
]

console.log("El nombre del primer alumno es: ",alumnos[0].nombre)
console.log("El segundo curso del primer alumno es: ",alumnos[0].cursos[1].nombre)
console.log("La tercera nota del segundo curso del primer alumno es: ",alumnos[0].cursos[1].notas[1])
console.log("")
console.log("El nombre del segundo alumno es: ",alumnos[1].nombre)
console.log("El primer curso del segundo alumno es: ",alumnos[1].cursos[0].nombre)
console.log("La tercera nota del primer curso del segundo alumno es: ",alumnos[1].cursos[1].notas[2])

console.log("")

for (i=0;i<alumnos.length;i++){
    console.log("Nombre del alumnno "+i+":"+alumnos[i].nombre)
    for (j=0;j<alumnos[i].cursos.length;j++){
        console.log("Curso "+j+":"+alumnos[i].cursos[j].nombre)
        console.log("Las notas del alumno en el curso son:")
        for (k=0;k<alumnos[i].cursos[j].notas.length;k++){
            console.log(alumnos[i].cursos[j].notas[k])
        }
    }
}