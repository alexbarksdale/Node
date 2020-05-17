const add = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (a < 0 || b < 0) return reject('No negatives');

            resolve(a + b);
        }, 2000);
    });
};

const doWork = async () => {
    // awaiting each of these is okay becase we need the value before it to continue
    const sum = await add(5, 5); // wait for this before moving on
    const sum2 = await add(sum, 50); // then wait for this
    const sum3 = await add(sum2, 50); // then wait for this
    return sum3;
};

// doWork()
//     .then((res) => {
//         console.log(res);
//     })
//     .catch((err) => console.log(err));

// NOT THE BEST WAY, REFER BELOW
// const getNum = async () => {
//     const a = await add(5, 5);
//     const b = await add(10, 10);

//     const total = await Promise.all([a, b]);
//     return total;
// };

const getNum = async () => {
    try {
        // Instead of waiting for each of the promises you can add all the promises into an array
        // and await that Promise
        const a = add(5, 5);
        const b = add(10, 10);

        const total = await Promise.all([a, b]);
        return total;
    } catch (err) {
        console.log(err);
    }
};

getNum().then((res) => console.log(res));
