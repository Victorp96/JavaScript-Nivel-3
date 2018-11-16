//cumple funcion de constructor...Clase y constructor juntos
function Curso(nombre,notas){
    this.nombre = nombre;
    this.notas = notas;
}

var c1 = new Curso("javascript",[10,20]);
var c2 = new Curso("javascript",[30,50,80]);
//agregar una nota
c1.notas.push(30)

function Alumno(nombre,cursos){
    this.nombre = nombre;
    this.cursos = cursos;
    this.agregarCurso = function (curso){
        this.cursos.push(curso)
    }
}

var a = new Alumno("Victor",[c1])
a.agregarCurso(c2);

var alumnos = [];
alumnos.push(a);

console.log("El nombre es ",c1.nombre)
console.log("Las notas son: ")
for (i=0;i<c1.notas.length;i++)
    console.log(c1.notas[i])

    
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