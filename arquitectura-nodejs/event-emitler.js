// Creamos un Event Emitter
const EventEmiter = require('events');
// Podemos crear un logger propio
class Logger extends EventEmiter {
    // Método execute recibe un callback
    execute(cb) {
        console.log('Before');
        // Emitimos un Evento 
        this.emit('start');
        //llamada al callback
        cb();
        // Emitimos otro evento
        this.emit('finish');
        console.log('After');
    }
}

const logger = new Logger();

// Cada vez que ocurra algún evento, hagá algo
logger.on('start', () => console.log('Starting'));
// Podemos Suscribirnos al evento multiples veces sin niguna restricción 
logger.on('finish', () => console.log('Finishing'));
logger.on('finish', () => console.log('Its Donde'));

logger.execute(() => console.log("hola mijo"));

/*
Algo muy importante es que si ejecutamos código asincrono, como un setTimeout,
el orden no va ha permanecer, porque como es código asincrono precisamente se va 
ha ejecutar despues de todas las emisiones, en ese caso la manera de controlarlo es
usando callbacks, si lo ejecutamos veremos que nuestro hello world se ejecuta despues,
porque queda de manera asincrona.
*/
logger.execute(() => setTimeout(() => console.log("Hello World"), 500));