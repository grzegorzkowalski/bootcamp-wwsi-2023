const numbers = [1, 1000, 101, 11];

function compareNumbers(a, b) {
   return a - b;
}

numbers.sort(compareNumbers);

console.table(numbers);
