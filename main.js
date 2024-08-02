// console.log("Hola Mundo! desde la cosola");
var app = document.getElementById('frase');

var typewriter = new Typewriter(app, {
    loop: true
});

typewriter.typeString('¡Si lo puedes imaginar, lo puedes crear!')
    .pauseFor(2500)
    .deleteChars(6)
    .typeString('<strong>programar!</strong>')
    .pauseFor(2500)
    .start();