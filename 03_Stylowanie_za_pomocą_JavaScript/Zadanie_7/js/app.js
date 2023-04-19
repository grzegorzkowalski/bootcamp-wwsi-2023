const button1 = document.querySelector("#button1");
const button2 = document.querySelector("#button2");
const button3 = document.querySelector("#button3");

const counters = document.querySelectorAll(".counter");

counters.forEach(el => el.style.color = "black");

function updateCounter(counter) {
    const current = parseInt(counter.innerText);
    console.log(current);
    counter.innerText = current + 1;
}

button1.addEventListener("click", () => updateCounter(counters[0]));
button2.addEventListener("click", () => updateCounter(counters[1]));
button3.addEventListener("click", () => updateCounter(counters[2]));

