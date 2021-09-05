const turnOn = document.getElementById("turnOn");
const turnOff = document.getElementById("turnOff");
const lamp = document.getElementById("lamp");

function isLampadaTrash (){
    return lamp.src.indexOf ("quebrada") > -1;
}


function lampOn () {
    if (!isLampadaTrash ()){
        lamp.src = "./img/ligada.jpeg";
    }
}

function lampOff () {
    if (!isLampadaTrash ()){
        lamp.src = "./img/desligada.jpeg";
    }
}

function lampTrash (){
    lamp.src = "./img/quebrada.jpeg";
}

turnOn.addEventListener("click", lampOn);
turnOff.addEventListener("click", lampOff);
lamp.addEventListener("mouseover", lampOn);
lamp.addEventListener("mouseleave", lampOff);
lamp.addEventListener("dblclick", lampTrash);