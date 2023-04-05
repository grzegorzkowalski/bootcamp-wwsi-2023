






const buttons = document.querySelectorAll(".btn");
const counter = document.querySelector(".counter");

counter.style.color = "black";

buttons.forEach(el => {
    el.addEventListener("click", function () {
        const current = parseInt(counter.innerText);
        console.log(current);
        counter.innerText = current + 1;
    })
})



