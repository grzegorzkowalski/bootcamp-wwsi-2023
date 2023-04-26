//Zadanie 1

const namesA =  ["Zosia", "Marcin", "Kamil"];
const namesB =  ["Ala", "Puszek", ...namesA, "Jan", "Karol" ];
console.log(namesB);

//Zadanie 2

const getAverage = (...params) => {
    return params.reduce((a,b) => a+b)/params.length;
}

console.log(getAverage(1,2,3));
console.log(getAverage(1,2,3,4,5,6,7));
