function randomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const randomNumbers = [];

for (let i = 0; i < 10; i++) {
    randomNumbers.push(randomInteger(1,100));
}

function checkEven(tab) {
    const evenTab = [];
    tab.forEach(el => {
        if (el % 2 === 0) {
            console.log("Liczba parzysta znaleziona.");
            evenTab.push(el);
        }
    })
    return evenTab;
}

console.log(checkEven(randomNumbers));
