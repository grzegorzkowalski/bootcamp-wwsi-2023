const parents = document.querySelectorAll(".parent");
console.log(parents);

parents.forEach((el) => {
    el.addEventListener("mouseenter", function() {
        console.log(this);
        this.firstElementChild.style.display = "block";
    });

    el.addEventListener("mouseleave", function () {
        this.firstElementChild.style.display = "none";
    });
})
