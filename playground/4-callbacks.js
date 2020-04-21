setTimeout(() => {
    console.log('One second up');
}, 1000);

const names = ['Alex', 'Bob', 'Ryan'];
const shortNames = names.filter((name) => {
    return name.lenth <= 4;
});

const geocode = (address, callback) => {
    setTimeout(() => {
        const data = {
            lat: 0,
            lng: 0,
        };
        callback(data);
    }, 2000);
};

//                'data' comes from the callback
geocode('Costco', (data) => console.log(data));

const add = (num1, num2, callback) => {
    setTimeout(() => {
        callback(num1 + num2);
    }, 2000);
};

add(1, 4, (sum) => console.log(sum));
