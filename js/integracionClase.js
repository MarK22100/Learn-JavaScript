class Persona {
    constructor(nombre, apellido){
        this.nombre = nombre;
        this.apellido = apellido;
        this.dni = dni;
    };
    mostrarInformacion(){
        return `Nombre: ${this.nombre}, Apellido: ${this.apellido}, DNI: ${this.dni}`
    }

}
class Mentor extends Persona{
    constructor(nombre, apellido, materia,dni){
        super(nombre, apellido,dni)
        this.materia = materia;
        this.rol='Mentor'
    }
    mostrarInformacion(){
        return `Rol: ${this.rol}, Apellido: ${this.apellido}, Nombre:${this.nombre}, DNI:${this.dni}, Materia:${this.materia}`
    }
}
class Alumno extends Persona{
    constructor(nombre, apellido, curso, becado){
        super(nombre, apellido)
        this.rol='Alumno'
        this.curso = curso;
        this.becado = becado;
        
    }
    mostrarInformacion(){
        return `Rol: ${this.rol}, Becado:${this.becado}, Apellido: ${this.apellido}, DNI:${this.dni}, Nombre:${this.nombre}, Materia:${this.curso}`
    }
}

class Sistema{
    constructor(){
        this.almacen=[];
    }

    crearMentor(mentor){
        if () {
            console.log('El usuario ya existe');
        } else {
            this.almacen.push(mentor);
        }
    
    }
}