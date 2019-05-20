//importamos para usar File System
const fs = require('fs');
//Objeto cursos
let cursos = [
	{
		id: 1,
		nombre: 'Ingeniería de Software',
		duracion: 4,
		costo: 320000
	},
	{
		id: 2,
		nombre: 'Introducción al Cálculo',
		duracion: 3,
		costo: 280000

	},
	{
		id: 3,
		nombre: 'Programación con Tati y Timoteo',
		duracion: 2,
		costo: 190000
	},
];

let obtenerCursos = ()=> {
	for (i = 0; i < cursos.length; i++) {
		(function(i){
			setTimeout(function(){
				console.log('El nombre del curso con id ' + cursos[i].id + ' es ' + cursos[i].nombre + 
					', tiene una duración de ' + cursos[i].duracion + ' horas y un costo de ' + cursos[i].costo + ' pesos.');
			}, 2000 * (i + 1));
		})(i);
	}
	return '';
}

let listarCurso = (curso) => {
	setTimeout(function(){
			//console.log('El nombre del curso es ' + curso.nombre + ', tiene una duración de ' + curso.duracion + ' horas y un costo de ' + curso.costo + ' pesos.');
		}, 2000);
	console.log('El nombre del curso es ' + curso.nombre + ', tiene una duración de ' + curso.duracion + ' horas y un costo de ' + curso.costo + ' pesos.');
}

let buscarCurso = (id) =>{
	let curso = cursos.find(curso => curso.id === id);
	return curso;
}

let crearArchivo = (curso, nombre, cedula) =>{
	texto = 'El estudiante con nombre ' + nombre + ' y cédula ' + cedula + '\n' + 'Se ha matriculado en el curso ' + 
			curso.nombre + '\n' + 'Con una duracion de ' + curso.duracion + ' meses y un costo de ' + curso.costo + ' pesos.'
	fs.writeFile('matricula.txt', texto, (err) => {
		if (err) throw (err);
		console.log('Se ha creado el archivo');
	});
}

module.exports = {
	obtenerCursos,
	buscarCurso,
	crearArchivo
};