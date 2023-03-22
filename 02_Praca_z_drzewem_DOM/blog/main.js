//Zadanie 1

//1. Nagłówek
const blogHeader = document.querySelector(".about-blog__content-title");
console.log(blogHeader);

//2. Logo
const logo = document.querySelector(".navigation-menu img");

//3. Formularz
const blogForm = document.querySelector("form");

//4. Mail link
const mailLink = document.querySelector(".e-mail a");

//Zadanie 2

const galleryList = document.querySelectorAll(".gallery-main-photo");

//Zadanie 3

//1.

blogHeader.textContent = "Test ze studentami";

//2.
console.log(logo.tagName);

//3.
//logo.setAttribute("src", "https://paczka-wiedzy.pl/wp-content/uploads/2019/01/panda-1200x900.jpg");
//logo.setAttribute("src", "./img/kowal.png");
//logo.src = "./img/kowal.png";
console.log(logo);

//4.
const inputs = document.querySelectorAll("form input");
console.log(inputs[0].value);

console.log(blogForm.innerHTML);

//5.
mailLink.setAttribute("href", "mailto:grzegorzkowalski@yahoo.com");

//6.
const headerClass = blogHeader.className;
console.log(headerClass);

//7.
blogHeader.classList.remove(headerClass);

//8.
document.querySelector(".promo-article-title").className = headerClass;


//Zadanie 4

const newLi = document.createElement("li");
const newLink = document.createElement("a");
newLink.innerText = "Podróże";
newLink.setAttribute("href", "#podroze");
newLi.append(newLink);
const list = document.querySelector("ul");
list.append(newLi);
console.dir(newLi);
