// const square = function (x) {
//     return x * x;
// };

// console.log(square(3));

// const square = (x) => x * x;

// console.log(square(4));

const event = {
    name: 'Wedding Party',
    guessList: ['Alex', 'Noah', 'Bob'],
    printGuestList() {
        console.log(`Guest list for ${this.name}`);

        this.guessList.forEach((person) => {
            console.log(`People attending: ${person} is attending ${this.name}`);
        });
    }
};

event.printGuestList();
