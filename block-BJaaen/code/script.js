let you = document.querySelector("#you");
let computer = document.querySelector("#computer");
let result = document.querySelector(".result");

let data = [
    'rock',
    'paper',
    'scissors',
    'lizard',
    'spock',
];

function createUi (data , cl = 'blue') {
    let div = document.createElement("div");
    for(let single of data){
        let i = document.createElement("i");
        i.className = `far fa-hand-${single} ${cl}`;
        i.setAttribute('data-figure', single);
        div.append(i);
    }
    return div;
}

you.append(createUi(data, 'blue'));
computer.append(createUi(data, 'red'));

let allBlue = document.querySelectorAll(".blue");

function handleClick(events) {
    let randomFigure = data[Math.floor(Math.random()*5)];
    let selectedFigure = events.target.dataset.figure;

    console.log(randomFigure, selectedFigure);
    if(randomFigure == selectedFigure) {
        result.textContent == "It's a Tie 🤯";
    } 
    else if ((selectedFigure== "scissors" && randomFigure == "paper") 
                || (selectedFigure== "paper" && randomFigure == "rock") 
                || (selectedFigure== "rock" && randomFigure == "lizard") 
                || (selectedFigure== "lizard" && randomFigure == "spock") 
                || (selectedFigure== "spock" && randomFigure == "scirrors") 
                || (selectedFigure== "scissors" && randomFigure == "lizard") 
                || (selectedFigure== "lizard" && randomFigure == "paper") 
                || (selectedFigure== "paper" && randomFigure == "spock") 
                || (selectedFigure== "spock" && randomFigure == "rock") 
                || (selectedFigure== "rock" && randomFigure == "scissors")
                ) {
            result.innerText = `You Won 😎`;
    } else {
        result.textContent = 'You Lost 😲 '; 
    }
}
allBlue.forEach((e) => e.addEventListener("click", handleClick));
