let container = document.querySelector(".container");
let char = [
    'coffee',
    'keyboard',
    'bug',
    'sitemap',
    'qrcode',
    'code',
    'code-branch',
    'terminal',

];
let count = 0;
let selectedtEle = [];

function mix(char = []) {
    let data = char.concat(char);
    data.sort(() => Math.random() - 0.5);
    return data;
}

function getRandomNumber(event){
    return Math.floor(Math.random() * event);
}

function createBox(char){
    let div = document.createElement('div');
    div.classList.add('box', 'hidden');
    div.setAttribute("data-type",char);
    let i = document.createElement('i');
    i.classList.add(`fas`, `fa-${char}`);
    div.append(i);

    return div;
}

mix(char).forEach((char) => container.append(createBox(char)));

function handleEvent (event){
    let target = event.target;
    if(event.target.classList.contains('box') ||
    event.target.classList.contains('fas')) {
        count = count + 1;
        if(target.classList.contains('box')){
            target.classList.remove('hidden');
            target.classList.add('selected');
            selectedtEle.push(target);
        } else{
            target.parentElement.classList.remove('hidden');
            target.parentElement.classList.add('selected');
            selectedtEle.push(target.parentElement);
        }
        matched();
    }
}
function disable (root){
    root
        .querySelectorAll('.hidden')
        .forEach( e => e.classList.add("disable"));
}
function enable(root){
    root
        .querySelectorAll('.hidden')
        .forEach( (e) => e.classList.remove("disable"));
}
function match(ele) {
    let types = ele.map( (e) => e.dataset.type);
    if(types[0] == types[1]){
        ele.forEach((ele) => ele.classList.add('success'));
    } else {
        ele.forEach((ele) => ele.classList.add('error'));
        setTimeout(() =>{
            ele.forEach((e) => e.classList.add('hidden'));
            ele.forEach((e) => e.classList.remove('error', 'selected'));
        }, 2000);
    }
    enable(container);
    console.log(types[0],types[1]);
}
function matched () {
    if(count === 2) {
        disable(container);
        match(selectedtEle);
        count = 0;
        selectedtEle = [];
    }
}

container.addEventListener('click',handleEvent);