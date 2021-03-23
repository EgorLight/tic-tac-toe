let Buttons = function(buttonsClass) {
    let buttonsList = document.getElementsByClassName(buttonsClass);
    for (let i in buttonsList) {
        if (i === "length") break;
        let id = buttonsList[i].id;
        this[id] = {
            element: buttonsList[i],
            from: document.getElementById(id.split("-")[0]),
            to: document.getElementById(id.split("-")[1]),   
        }
    }
}

function addListeners(buttonsObj) {
    for (let id in buttonsObj) {
        buttonsObj[id].element.addEventListener("click", function(event) {
            buttonsObj[event.target.id].to.classList.add("game__section--opened");
            buttonsObj[event.target.id].to.classList.remove("game__section");
            buttonsObj[event.target.id].from.classList.add("game__section");
            buttonsObj[event.target.id].from.classList.remove("game__section--opened");
        });
    }
}

function open(event) {
    console.log(event.target);    
}

let buttons = new Buttons("nav-list__link");
let backButtons = new Buttons("back-button");
addListeners(buttons);
addListeners(backButtons);