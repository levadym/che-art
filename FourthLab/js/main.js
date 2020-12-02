const topButton = document.getElementById("top-button"),
    regButton = document.getElementById("registration-button"),
    galleryButton = document.getElementById("gallery-button"),
    form = document.getElementById("registration"),
    mail = document.getElementById("mail"),
    password = document.getElementById("password"),
    repPassword = document.getElementById("repeat-password"),
    passwordMsg = document.getElementById("password-msg"),
    repPasswordMsg = document.getElementById("repeat-password-msg"),
    closeDialog = document.getElementById("close-dialog"),
    submitDialog = document.getElementById("submit-dialog"),
    timeKeeper = document.getElementById("clock"),
    gallery = document.getElementById("gallery");

const images = [
    ["images/HollowKnight.jpg", "Hollow Knight"],
    ["images/Celeste.jpg", "Celeste"],
    ["images/StardewValley.jpg", "Stardew Valley"]
];

function scrollFunction() {
    if (document.documentElement.scrollTop > 100) {
        topButton.style.display = "block";
    }
    else {
        topButton.style.display = "none";
    }
}
function backToTop() {
    document.documentElement.scrollTop = 0;
}
function showHideBlock(param) {
    if(param.style.display == "block") {
        param.style.display = "none";
    } else {
        param.style.display = "block";
    }
}
function showHideFlex(param) {
    if(param.style.display == "flex") {
        param.style.display = "none";
    } else {
        param.style.display = "flex";
    }
}
function regButtonHandler() {
    showHideBlock(form);
}
function inputBlur(paramInput, paramLength, msg) {
    if (paramInput.length < paramLength) {
        msg.innerHTML = "*Символів менше " + paramLength;
        return false;
    } else {
        msg.innerHTML = "";
        return true;
    }
}
function passHandler() {
    let cond = inputBlur(password.value, 8, passwordMsg);
    if(!cond) {
        document.getElementById("reg-submit").disabled = true;
    } else {
        document.getElementById("reg-submit").disabled = false;
    }
}
function repPassHandler() {
    let cond = inputBlur(repPassword.value, 8, repPasswordMsg);
    if(!cond) {
        document.getElementById("reg-submit").disabled = true;
    } else {
        document.getElementById("reg-submit").disabled = false;
    }
}
function passCheck() {
    if (password.value != repPassword.value || password.value.length == 0) {
        repPasswordMsg.innerHTML = "*Паролі не однакові";
        return false;
    } else {
        repPasswordMsg.innerHTML = "";
        return true;
    }
}
function formSubmit(event) {
    if (passCheck()) {
        event.preventDefault();
        console.log('here');
        document.querySelector('dialog').show();
    } else {
        event.preventDefault();
    }
}
function closeDialogHandler() {
    document.querySelector('dialog').close();
}
function submitDialogHandler() {
    document.querySelector('dialog').close();
    showHideBlock(form);
    mail.value = "";
    password.value = "";
    repPassword.value = "";
    window.alert("Дані успішно відправлені");
}
function showTime() {
    let time = new Date;
    let hours = time.getHours();
    if (hours < 10) {
        hours = "0" + hours;
    }
    let minutes = time.getMinutes();
    if (minutes < 10) {
        minutes = "0" + minutes;
    }
    let seconds = time.getSeconds();
    if (seconds < 10) {
        seconds = "0" + seconds;
    }
    timeKeeper.innerHTML = `${hours}:${minutes}:${seconds}`;
}
function galleryButtonHandler() {
    showHideFlex(gallery);
    let slots = document.getElementsByClassName("card-img-top");
    let info  = document.getElementsByClassName("card-body");
    for (let index = 0; index < slots.length; index++) {
        slots[index].src = images[index][0];
        slots[index].alt = images[index][1];
        info[index].innerHTML = `
        <details>
            <summary>Game</summary>
            <p class="card-text">${images[index][1]}</p>
        </details>`;
        // info[index].innerHTML = images[index][1];
    }
}

setInterval(showTime, 500);

window.onscroll = scrollFunction;
window.onload = showTime;
topButton.onclick = backToTop;
regButton.onclick = regButtonHandler;
galleryButton.onclick = galleryButtonHandler;
password.onblur = passHandler;
repPassword.onblur = repPassHandler;
form.onsubmit = formSubmit;
closeDialog.onclick = closeDialogHandler;
submitDialog.onclick = submitDialogHandler;

