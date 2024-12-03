var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
    loop: true
});

typewriter.typeString('Desarrolladora Frontend Jr.')
    .pauseFor(2500)
    .deleteAll()
    .typeString('¡Si lo puedes imaginar lo puedes programar!')
    .pauseFor(2500)
    //numeros caracter que se borraran 
    .deleteChars(10)
    .typeString('<strong>Crear!</strong>')
    .pauseFor(2500)
    .start();