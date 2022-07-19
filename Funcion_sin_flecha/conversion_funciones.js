//Función tradicional
/*function sayHello(name){
    console.log('Hello', name);
}*/

//Función en contraste
/*const sayHello = function(name){
    console.log('Hello',name);
}*/

//sayHello('Jean');

//Función anónima
//const sayHello = (name) => {return ('Hello '+ name)};

const sayHello = name => ({nombre: name});

console.log(sayHello('Jean'));