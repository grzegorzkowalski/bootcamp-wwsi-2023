const getSecondMaxNumber = (tab) => {
    const sortedTab = [...tab];
    sortedTab.sort((a,b) => a-b);
    return sortedTab[tab.length-2];
}

const arr1 = [2, 3, 1, 6, 100, 49, 5, 7, 8, 9 ];
console.log(getSecondMaxNumber(arr1));
console.log(arr1);
