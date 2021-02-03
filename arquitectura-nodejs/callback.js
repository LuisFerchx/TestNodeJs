const asyncCallback = function name(cb) {
    //para que sea asincrono se utiliza un setTimeout
    setTimeout(() => {
        if (Math.random() < 0.5) {
            // Concepto Error First Callback: 
            return cb(null, 'hola mijo');
        } else {
            cb(new Error('hay un error mijo'));
        }
    }, 2000);
};

asyncCallback((err, msg) => {
    // Verificar si existe el error
    if (err) {
        console.log('error', err);
    } else {
        console.log('message:', msg);
    }
})