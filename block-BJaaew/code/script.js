let ul = document.createElement("ul");
let filterDiv = document.createElement("div");
let container = document.querySelector('.container');
let input = document.querySelector('input');
let allPeople = got.houses.map(e => e.people).flat();
let filter = [...allPeople];

function createUi (){
    got.houses.forEach ((gotdetails) => {
        gotdetails.people.forEach((peopledetails) => {
            let li = document.createElement("li");
            li.classList.add("box");
            let flex = document.createElement("div");
            flex.classList.add("flex");
            let img = document.createElement("img");
            img.src = peopledetails.image;
            let h2 = document.createElement("h2");
            h2.innerText = peopledetails.name;
            let p = document.createElement("p");
            p.innerText = peopledetails.description;
            let more = document.createElement("a");
            more.classList.add("more-btn");
            more.innerText = "Learn More";
            
            ul.append(li);
            flex.append(img,h2);
            li.append(flex,p,more);
        });
    });
    document.querySelector(".container").append(ul);
}
createUi();
function buttonUi(){
    let li1 = document.createElement('li');
    li1.innerText = 'All';
    ul.append(li1);
    got.houses.forEach((item) => {  
     let li = document.createElement('li');
     li.innerText = item.name;
     ul.append(li);
    });
}
buttonUi();

function handler(event) {
    if(event.target.tagName == 'LI') {
        if(event.target.innerText == 'All') {
            createUi(allPeople);
        } else {
             got.houses.forEach(element => {
                if(element.name == event.target.innerText) filter = element.people; 
            });
            createUi(filter);
        }
    }
}

ul.addEventListener('click',handler);



function inputHAndler(event) {
   let search = filter.filter(element => element.name.toLowerCase().includes(event.target.value.toLowerCase()));
   createUi(search);
}

input.addEventListener('input',inputHAndler);