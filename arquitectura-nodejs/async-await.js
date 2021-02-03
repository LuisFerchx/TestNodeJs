
const promiseFunction = () => new Promise((resolve, reject) => {
    //para que sea asincrono se utiliza un setTimeout
    setTimeout(() => {
        if (Math.random() < 0.5) {
            resolve('hola mijo');
        } else {
            reject(new Error('hay un error mijo'));
        }
    }, 2000);
});


async function asyncAwait() {
    try {
        const msg = await promiseFunction();
        console.log("message", msg);
    }
    catch (err) {
        console.log("error", err);
    }
}

asyncAwait();