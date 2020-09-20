let values = document.querySelectorAll(".box-1");
let arr = [...values];

function rotate (element,index) {
    element.innerText = `${index + 1}`;
    element.style.transform = `rotateY(360deg)`
    setTimeout (function(){
        element.style.transform = `rotateY(180deg)`
        element.innerText = "";
    },5000);
}
arr.forEach((element,index) => {
    element.addEventListener("click",function(){
        rotate(element,index);
    })
});

// WITH DELIGATION

let boxes = document.querySelector(".boxes-2");

function withDeligation (element) {
    if (element.target.classList.contains("box")) {
        rotate(element.target,[...element.currentTarget.children].indexOf(element.target)) 
    }
}
boxes.addEventListener("click",withDeligation);