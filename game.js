
const buttons = {
    init: function() {
        for (key in this) {
            if (typeof this[key] === "function") continue;
            this[key].getElement().addEventListener("click", openSection);
        }
    },
    playBtn: {
        getElement: getElement,
        elementId: "playBtn",
        targetSection: "mode",
        currentSection: "menu",
        open: open,
    },
    rulesBtn: {
        getElement: getElement,
        elementId: "rulesBtn",
        targetSection: "rules",
        currentSection: "menu",
        open: open,
    },
    settingsBtn: {
        getElement: getElement,
        elementId: "settingsBtn",
        targetSection: "settings",
        currentSection: "menu",
        open: open,
    },
    aboutBtn: {
        getElement: getElement,
        elementId: "aboutBtn",
        targetSection: "about",
        currentSection: "menu",
        open: open,
    },
    // backBtn: {
    //     targetSection: "menu",
    //     currentSection: ["rules", "mode", "settings", "about"], 
    //     open: open,
    // },
}

function getElement() {
    id = this.elementId
    return document.getElementById(id);
}

function open() {
    let targetSection = document.getElementById(this.targetSection);
    let currentSection = document.getElementById(this.currentSection);
    targetSection.classList.add('game__section--opened');
    currentSection.classList.remove('game__section--opened');
    currentSection.classList.add('game__section');
}

function openSection(event) {
    buttons[event.target.id].open();
}

buttons.init();