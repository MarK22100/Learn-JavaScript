let arrUsuarios = [];

const user1 = {
    nombre : 'Marcos',
    apellido :'Zambrana'
}

arrUsuarios.push(user1);

console.log(arrUsuarios);

//LOCAL STORAGE

/*ALMACENA DE LAS SIGUIENTE MANERA KEY - VALOR (STRING - STRING) */
/**
 * METODOS
 * 
 * SET ITEM ---> ES PARA CREAR NUEVOS REGISTROS
 * 
 * GET ITEM ---> ES PARA OBETENER UN REGISTRO
 */
//GUARDANDO UN ITEM EN LA LOCAL STORAGE
localStorage.setItem('test','probando el almacenamiento en el local storage');
localStorage.setItem('test1','probando el almacenamiento en el local storage');

//TRAIGO EL VALOR (getItem)
console.log(localStorage.getItem('test'));
//modificando el item guardado, llamando con el mismo nombre de la test
localStorage.setItem ('test','modificando el valor almacenado')

//eliminando el item removeItem
localStorage.removeItem('test1')

//eliminando todo
localStorage.clear();

//como alcenar objetos o array dentro del LS

//primero se convierte el array o objeto en un string con este metodo
localStorage.setItem('usuarios', JSON.stringify(arrUsuarios));

//segundo se lo almacena en LS
const user = localStorage.getItem('usuarios');

//si lo quiero ver en consola como objeto lo devuelvo con este metodo
const usersLS = JSON.parse(user);

console.log(user);
console.log(usersLS);



