class estudiante {
    nombre = "Ivan";
    asignaturas = ["JavaScript", "HTML", "CSS"]

    obtenDatos() {
        return {
            nombre: this.nombre,
            asignaturas: this.asignaturas
        }
    }
}

const nuevoEstudiante = new estudiante()
console.log(nuevoEstudiante)

console.log(nuevoEstudiante instanceof estudiante)
console.log(nuevoEstudiante.obtenDatos())
