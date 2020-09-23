let form = document.querySelector("form");
let input = document.querySelector("input");
let box = document.querySelector(".box");
let userInfo = [];

function handleEvents(events) {
    events.preventDefault();
    let movieData = form.elements.movies.value;
    userInfo.push(movieData);

    userInfo.forEach(movieName => {
        let ul = document.createElement("ul");
        let li = document.createElement("li");
        li.textContent = movieName;
        let span = document.createElement('span');
        span.innerHTML = '<img src= "https://www.flaticon.com/svg/static/icons/svg/1828/1828778.svg">';
        
        li.append(span);
        ul.append(li);
        box.append(ul);

        span.addEventListener('click', function(event) {
            event.currentTarget.parentElement.remove();
            let removeName = userInfo.indexOf(movieName);
            userInfo.splice(removeName);
        });
    });
}

form.addEventListener('submit',handleEvents);