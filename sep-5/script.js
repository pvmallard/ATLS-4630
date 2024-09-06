console.log("hello world");

let helloWorldVar = "hello world";
const helloWorldConst = "hello world constant";

helloWorldVar = 'here are "quotes"';
helloWorldVar = `here is string literal ${70 - getAge()} info`;
helloWorldVar = 'concatenation' + "number" + anotherString;
helloWorldVar = [0,1,2]; 

let anObject = {
    name: "ATLAS",
    thing: 74,
    condition: true
};

let aName = anObject.name;
let aThing = anObject["thing"];

if (x + y > 10) {
    anObject.name = "herenow";
} else {
    anObject.thing = 34
};

// loops
let z = 0;
while (anObject.condition) {
    anObject.condition = false;
};
for(let i = 0; i < 10; i++){
    console.log(i);
};
for(const city of cities) {
    //do smth
};

// functions
function printToConsole(something){
    console.log(something);
};
cities.foreach(printToConsole);
const myArrowFunction = (parameter) => {
    parameter;
}
myArray.foreach((item) => console.log(item));

// gettin the variables with DOM
document.getElementById("some-id")
document.getElementsByClassName("some-class-name") // will get array, first is [0]
document.querySelector("#some-id")
document.querySelector(".some-class-name") // first element
document.querySelectorAll(".some-class-name")

let changeLinkButton = document.querySelector("#change-link");
changeLinkButton.addEventListener('click', changeLink);

function changeLink() {
    const googleLink = document.querySelector("#google-link");
    googleLink.href = 'new link';
}