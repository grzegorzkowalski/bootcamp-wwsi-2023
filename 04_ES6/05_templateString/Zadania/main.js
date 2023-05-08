//Zadanie 1
const num1 = 5;
const sumString = `Suma dwóch liczb ${num1} i ${Math.max(1,3,4)} to: ${num1+Math.max(1,3,4)}.`;
console.log(sumString);


//Zadanie 2
const person = {
    name: "Vlad",
    lastName: "Drăculea",
    yearOfBirth: 1431,
    profession: "Lord of Wallachia"
};

const whoAreYou = (obj) => {
    const vampire =
    `    My name is ${obj.name} ${obj.lastName}.
    I am ${new Date().getFullYear() - obj.yearOfBirth} years old.
    My profession is ${obj.profession}.`;
    return vampire;
}

console.log(whoAreYou(person));

