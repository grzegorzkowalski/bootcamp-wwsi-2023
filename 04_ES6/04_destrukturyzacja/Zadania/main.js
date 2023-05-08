//Zadanie 1

const weather = [ "snow", "rain", "sun" ];

const [snow,, sun] = weather;

console.log(snow, sun);

//Zadanie 2

const slider = {
    type: "infinite",
    numberOfItems: 10,
    center: true,
    autoStart: true
}

const {type, autoStart} = slider;

console.log(type, autoStart);

//Zadanie 3

const names = ["Grzegorz", "Marcin", "Bonawentura"];

const [pierwsze, drugie, bierzmowanie] = names;

console.log({pierwsze, drugie, bierzmowanie});

//Zadanie 4

const generateRandomNumbers = () => {
    function randomInteger(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    const tab = [];
    for (let i = 0; i < 6; i++) {
        tab.push(randomInteger(0,5))
    };
    console.log(tab);
    return tab;
}

const [first, ,third] = generateRandomNumbers();
console.log({first, third});

//Zadanie 5

const cat = {
    name: "Mruczek",
    age: 10,
    getVoice: () => "miau miau"
};

const showAnimal = ({name, age: catAge, getVoice }) => {
    return `Kot ${name} ma ${catAge} lat i robi ${getVoice()}.`;
}

console.log(showAnimal(cat));
