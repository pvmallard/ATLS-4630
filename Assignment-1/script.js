let count = 0; 
let state = "rainbow";

let rainbowizer = document.querySelector("#change-color");
rainbowizer.addEventListener('click', changeColor);
rainbowizer.addEventListener('click', switchState("rainbow"));
let demonizer = document.querySelector("#change-color");
demonizer.addEventListener('click', changeColor);
demonizer.addEventListener('click', changeText);
demonizer.addEventListener('click', switchState("demon"));

function switchState(string) {
    state = string;
    console.log(state);
};

function changeColor() {

    
    
    if(count > 3){
        document.getElementById("uno").style.backgroundColor = 'pink';
        document.getElementById("dos").style.backgroundColor = 'red';
        document.getElementById("tres").style.backgroundColor = 'maroon';
        document.getElementByClassName("flexy").style.backgroundImage = 'linear-gradient(pink, maroon)';
        summonHim();
    }
    else if(count > 2){
        document.getElementById("uno").style.backgroundColor = 'lavender';
        document.getElementById("dos").style.backgroundColor = 'purple';
        document.getElementById("tres").style.backgroundColor = 'indigo';
        document.getElementByClassName("flexy").style.backgroundImage = 'linear-gradient(lavender, indigo)';
    }
    else if(count > 1){
        document.getElementById("uno").style.backgroundColor = 'lavender';
        document.getElementById("dos").style.backgroundColor = 'purple';
        document.getElementById("tres").style.backgroundColor = 'indigo';
        document.getElementByClassName("flexy").style.backgroundImage = 'linear-gradient(lavender, indigo)';
    }
    else{
        document.getElementById("uno").style.backgroundColor = 'lavender';
        document.getElementById("dos").style.backgroundColor = 'purple';
        document.getElementById("tres").style.backgroundColor = 'indigo';
        document.getElementByClassName("flexy").style.backgroundImage = 'linear-gradient(lavender, indigo)';
    }
    count++;
};

function changeText() {
    document.getElementByID("#my-heading").text = 'Welcome to Hell';
};

function summonHim() {
    document.querySelector("#THElink").href = "https://www.youtube.com/watch?v=gASV_lYCwlo&themeRefresh=1"; 
};