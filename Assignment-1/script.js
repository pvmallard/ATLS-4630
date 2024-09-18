let count = 0; 
let state = "rainbow";
let isActive = false;

let rainbowizer = document.querySelector("#change-color");
rainbowizer.addEventListener('click', changeColor);
rainbowizer.addEventListener('click', switchState("rainbow"));
rainbowizer.addEventListener('mouseover', nowColor);
rainbowizer.addEventListener('mouseout', unColor);

let demonizer = document.querySelector("#change-text");
demonizer.addEventListener('click', changeColorEvil);
demonizer.addEventListener('click', changeText);
demonizer.addEventListener('click', switchState("demon"));
demonizer.addEventListener('mouseover', nowColorDemon);
demonizer.addEventListener('mouseout', unColor);

let linky = document.querySelector("#THElink");
linky.addEventListener('mouseover', bignBold);
linky.addEventListener('mouseout', tinytime);

function nowColor() {
    rainbowizer.style.backgroundColor = 'aqua';
    rainbowizer.style.fontSize = '50px';
};

function nowColorDemon() {
    demonizer.style.backgroundColor = 'red';
    demonizer.style.fontSize = '50px';
};

function unColor() {
    rainbowizer.style.backgroundColor = 'white';
    demonizer.style.backgroundColor = 'white';
    rainbowizer.style.fontSize = '20px';
    demonizer.style.fontSize = '20px';
};

function switchState(string) {
    state = string;
    console.log(state);
};

function changeColor() {
    document.getElementById("uno").textContent= "pretty!";
    document.getElementById("uno").style.color = 'black'; 
    document.querySelector("#THElink").textContent = 'yippee!'; 
    document.querySelector("#THElink").style.color = 'black'; 
    document.getElementById("flexy").style.borderColor = 'black';
    document.querySelector("#THElink").style.textDecoration = "none";

    isActive = false;

    if(count >= 4){
        document.getElementById("uno").textContent= "OH, WAIT";
        document.getElementById("uno").style.backgroundColor = 'azure';
        document.getElementById("dos").style.backgroundColor = 'aquamarine';
        document.getElementById("tres").style.backgroundColor = 'aqua';
        document.getElementById("flexy").style.backgroundImage = 'linear-gradient(azure, aqua)';
        count = 0;
        summonHim();
    }
    else if(count >= 3){
        document.getElementById("uno").textContent= "oh, wait";
        document.querySelector("#THElink").textContent = 'once more'; 

        console.log('green');
        document.getElementById("uno").style.backgroundColor = 'palegreen';
        document.getElementById("dos").style.backgroundColor = 'green';
        document.getElementById("tres").style.backgroundColor = 'darkgreen';
        document.getElementById("flexy").style.backgroundImage = 'linear-gradient(palegreen, darkgreen)';
    }
    else if(count >= 2){
        console.log('yellow');
        document.getElementById("uno").style.backgroundColor = 'palegoldenrod';
        document.getElementById("dos").style.backgroundColor = 'gold';
        document.getElementById("tres").style.backgroundColor = 'chocolate';
        document.getElementById("flexy").style.backgroundImage = 'linear-gradient(palegoldenrod, chocolate)';
    }
    else if(count >= 1){
        console.log('red');
        document.getElementById("uno").style.backgroundColor = 'pink';
        document.getElementById("dos").style.backgroundColor = 'red';
        document.getElementById("tres").style.backgroundColor = 'maroon';
        document.getElementById("flexy").style.backgroundImage = 'linear-gradient(pink, maroon)';
    }
    else{
        console.log('purple');
        document.getElementById("uno").style.backgroundColor = 'lavender';
        document.getElementById("dos").style.backgroundColor = 'purple';
        document.getElementById("tres").style.backgroundColor = 'indigo';
        document.getElementById("flexy").style.backgroundImage = 'linear-gradient(lavender, indigo)';
    }
    count++;
};

function changeColorEvil() {
    document.getElementById("uno").style.backgroundColor = 'black';
    document.getElementById("uno").textContent= "why'd you do that";
    document.getElementById("uno").style.color = 'white'; 
    isActive = true;

    document.getElementById("dos").style.backgroundColor = 'black';
    document.getElementById("tres").style.backgroundColor = 'black';

    document.getElementById("flexy").style.backgroundImage = 'linear-gradient(red, black)';
    document.getElementById("flexy").style.borderColor = 'red';

    document.querySelector("#THElink").textContent = 'DONT CLICK THIS'; 
    document.querySelector("#THElink").style.textDecoration = "underline overline";
    document.querySelector("#THElink").style.color = 'white'; 
    document.querySelector("#THElink").href = "https://www.youtube.com/watch?v=-vJ0NMOH2vA"; 

};

function changeText() {
    document.querySelector("#my-heading").textContent = 'Welcome to Hell';
};

function summonHim() {
    document.querySelector("#THElink").textContent = 'WHAT IS THIS'; 
    document.querySelector("#THElink").style.textDecoration = "underline overline";
    document.querySelector("#THElink").href = "https://www.youtube.com/watch?v=gASV_lYCwlo&themeRefresh=1"; 
    isActive = true;
};

function bignBold() {
    if(isActive){document.querySelector("#THElink").style.fontSize = "100px";};
};

function tinytime() {
    document.querySelector("#THElink").style.fontSize = "20px";
};