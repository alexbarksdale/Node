console.log('Client side javascript file is loaded!');

fetch('http://puzzle.mead.io/puzzle').then((res) => {
    res.json().then((data) => {
        console.log(data);
    });
});

const weatherForm = document.getElementById('locID');
const search = document.querySelector('input');

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const loc = search.value;

    fetch(`http://localhost:3000/weather?address=${loc}}`).then((res) => {
        res.json().then((data) => {
            if (data.error) {
                console.log(data.error);
            } else {
                console.log(data.location);
                console.log(data.forecast);
            }
        });
        search.value = '';
    });
});
