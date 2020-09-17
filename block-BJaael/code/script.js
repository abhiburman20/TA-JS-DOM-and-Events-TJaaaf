let boxes = document.querySelector(".boxes");
for (let i=0; i<=500; i++){
    let smallbox = document.createElement("div");
    smallbox.classList.add("colorBox");
    smallbox.innerText = `${Math.round(Math.random() * 500)}`;
    boxes.append(smallbox);
}
function randomColor(){
    let anybox = document.querySelectorAll('.colorBox');
      anybox.forEach((anybox) => {
        anybox.innerText = `${Math.round(Math.random() * 500)}`;
        anybox.style.backgroundColor = `#${Math.round(Math.random() * 1000)}`;
    })
}
boxes.addEventListener('mousemove', randomColor) 