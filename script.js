const turnOff = document.querySelector(".off");
const light = document.querySelector(".light")

function blackout(){
    document.body.style.background = "#000";

    light.src = "img/lightbulbOn.png"
}

const turnOn = document.querySelector(".on");

function lightUp(){
    document.body.style.background = "#fff"; 

    light.src = "img/lightbulbOff.png"
}