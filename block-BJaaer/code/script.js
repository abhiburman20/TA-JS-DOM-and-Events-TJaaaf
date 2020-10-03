let form = document.querySelector("form");
let userInfo = {};

function handleEvents(event){
    event.preventDefault();
    userInfo.name = form.elements.name.value;
    userInfo.email = form.elements.email.value;
    userInfo.interest = form.elements.interest.value;
    userInfo.color = form.elements.color.value;
    userInfo.range = form.elements.range.value;
    userInfo.books = form.elements.books.value;
    userInfo.terms = form.elements.terms.checked;

    let modal = document.createElement("div");
    modal.classList.add("container");
    let formControl = document.createElement("div");
    formControl.classList.add("container");
    let name = document.createElement("h1");
    let email = document.createElement("h2");
    let interest = document.createElement("h2");
    let color = document.createElement("h2");
    let range = document.createElement("h2");
    let books = document.createElement("h2");
    let terms = document.createElement("h2");
    let close = document.createElement("button");
    
    name.innerText = "Hello " + userInfo.name;
    email.innerText = "Email: " + userInfo.email;
    interest.innerText = "You Love: " + userInfo.interest;
    color.innerText = "Color: " + userInfo.color;
    range.innerText = "Range: " + userInfo.range;
    books.innerText = "Book Genre: " + userInfo.books;
    terms.innerText = userInfo.terms ? "You agree the Terms & Condition" : " You don't agree the Terms & Condition";
    close.innerText = "Close";

    document.body.append(formControl);
    formControl.append(name, email, interest, color, range, books, terms, close);
    
    form.style.display = "none";
    modal.style.display = "flex";
    close.addEventListener("click", () => {
        window.location.reload()
    });
}
form.addEventListener("submit",handleEvents) 