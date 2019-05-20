//Opciones de ingreso por teclado
//node principal
//node principal inscribir -i=1 -n=Pepito -x=12345
const opciones = {
	id:{
		demand: true,
		alias: 'i'
	},
	nombre:{
		demand: true,
		alias: 'n'
	},
	cedula:{
		demand: true,
		alias: 'x'
	}
}
//Si se envía la palabra inscribir debe pedir los argumentos obligatorios en opciones
//Importamos yargs con require y establecemos los comandos son sus variables por teclado
const argv = require('yargs')
			.command('inscribir', 'Inscribirse en un curso', opciones)
			.argv

//Se crea una constante por cada export que tendremos
const {obtenerCursos, buscarCurso, crearArchivo} = require ('./cursos.js');

if (argv._[0] == 'inscribir'){
	//Si se va a inscribir a un curso, debe buscar el id ingresado de ese curso
	let curso = buscarCurso(argv.i);
	if (curso){
		crearArchivo(curso, argv.n, argv.x);
	}
	else
	{
		console.log('Ha ingresado un ID que no corresponde a ningún curso ' + '\n');
		obtenerCursos();
	}
}
else {
	//Accedemos a la información de los cursos
	console.log(obtenerCursos());
}