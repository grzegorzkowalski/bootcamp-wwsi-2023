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

//Zadanie 3

const name = "Grzegorz";
const charTable = [...name];
console.log(charTable);


//Zadanie 4

const fruits = ["tangerine", "cherry", "banana"];
const vegetables = ["potato", "tomato", "onion"];

const salad = [...fruits, ...vegetables];
console.log(salad);

//Zadanie 5

const state = {
    invoiceSection: false,
    availableYears: [1990, 1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999, 2000, 2001, 2002, 2003, 2004, 2005],
    formStatus: "failed",
    isUserLogged: false
};

const stateCopy = {
    ...state,
    isUserLogged: !state.isUserLogged,
    availableYears: state.availableYears.filter(el => el <= 1999)
}

console.log(state);
console.log(stateCopy);

console.log(state === stateCopy);
