// fetch('https://jellybellywikiapi.onrender.com/api/beans') // fetch API
//     .then(response => response.json())
//     .then(json => console.log(json.items[1]));

const summonBeanA = document.getElementById('summon-a');
summonBeanA.addEventListener('click', getABean);
const summonBeanB = document.getElementById('summon-b');
summonBeanB.addEventListener('click', getABean);

async function getABean() {
    console.log("bean time");

    const url = `https://jellybellywikiapi.onrender.com/api/beans`;
    const response = await fetch(url); 
    let json = await response.json();

    randPage = Math.floor(Math.random() * 11) + 1;
    randBean = Math.floor(Math.random() * 10);

    json.currentPage = randPage;
    console.log(json);
    console.log(json.items[randBean]);

    
}