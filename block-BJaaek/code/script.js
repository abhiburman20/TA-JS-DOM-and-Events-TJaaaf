let first = document.querySelector(".first");
first.addEventListener('click',function() {
    let  red = Math.round(Math.random()*200);
    let green = Math.round(Math.random()*200);
    let blue = Math.round(Math.random()*200);
    first.style.backgroundColor = `rgb(${red},${green},${blue}`;
});
let second = document.querySelector(".second");
second.addEventListener('mousemove',function(){
    let  red = Math.round(Math.random()*200);
    let green = Math.round(Math.random()*200);
    let blue = Math.round(Math.random()*200);
    second.style.backgroundColor = `rgb(${red},${green},${blue}`;
});