const biggestCities = ["Tokio", "Delhi", "Szanghaj", "São Paulo", "Meksyk"];

function longestName(tab) {
    function compareNumbers(a, b) {
        return a.length - b.length;
    }

    tab.sort(compareNumbers);
    const name = tab[tab.length-1];
    const len = name.length;

    return {name, len}
}

console.log(longestName(biggestCities));
