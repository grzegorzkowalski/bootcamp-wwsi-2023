//Zadanie 1

const getSecondMaxNumber = (tab) => {
    const sortedTab = [...tab];
    sortedTab.sort((a,b) => a-b);
    return sortedTab[tab.length-2];
}

const arr1 = [2, 3, 1, 6, 100, 49, 5, 7, 8, 9 ];
console.log(getSecondMaxNumber(arr1));
console.log(arr1);


//Zadanie 2

const runInterval = (n = 8) => {
    let i = 0;
    const intervalID = setInterval(() => {
        if (i < n) {
            console.log("Hello");
            i++;
        }
        else {
            clearInterval(intervalID);
        }
    }, 500);
}

runInterval();


//Zadanie 3

const generateLinks = (tab) => {
    return tab.map(el => `https://${el}.com`);
}

console.log(generateLinks(["google", "twitter", "facebook"]));


const insertLinks = (tab, query) => {
    tab.forEach((el) => {
        console.log(el);
        query.innerHTML += `<li><a href="${el}">${el}</a></li>`;
    })
}

const insertLinks2 = (tab, query) => {
    tab.forEach((el) => {
        const newLi = document.createElement("li");
        const newA = document.createElement("a");
        newA.setAttribute("href", el);
        newA.textContent = el;
        newLi.append(newA);
        query.appendChild(newLi);
    })
}

const tab = generateLinks(["google", "twitter", "facebook"]);
const menu = document.querySelector("#menu");
const menu2 = document.querySelector("#menu2");

insertLinks(tab, menu);
insertLinks2(tab, menu2);
