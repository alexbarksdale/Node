const examplePromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        // resolve('Promised resolved');
        reject('Promise went wrong');
    }, 2000);
});

examplePromise
    .then((res) => {
        console.log(res);
    })
    .catch((err) => console.log(err));
