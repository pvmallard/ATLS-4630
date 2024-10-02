// fetch('https://jellybellywikiapi.onrender.com/api/beans') // fetch API
//     .then(response => response.json())
//     .then(json => console.log(json.items[1]));

// fetch('https://jellybellywikiapi.onrender.com/api/combinations') // fetch API
//     .then(response => response.json())
//     .then(json => console.log(json));

// fetch('https://jellybellywikiapi.onrender.com/api/recipes') // fetch API
//     .then(response => response.json())
//     .then(json => console.log(json));

let beanA;
let beanB;

const beans = [
    {
      title: document.getElementById('bean-a-title'),
      desc: document.getElementById('bean-a-info'),
      img: document.getElementById('bean-a'),
    },
    {
      title: document.getElementById('bean-b-title'),
      desc: document.getElementById('bean-b-info'),
      img: document.getElementById('bean-b'),
    },
  ];

const mArea = {
    title: document.getElementById('merge-title'),
    desc: document.getElementById('results'),
    img: document.getElementById('merge-result'),
}

const a = document.getElementById('bean-a-container');
const b = document.getElementById('bean-b-container');

const summonBeanA = document.getElementById('summon-a');
summonBeanA.addEventListener('click', getABean);
const summonBeanB = document.getElementById('summon-b');
summonBeanB.addEventListener('click', getABean);
const merge = document.getElementById('merge');
merge.addEventListener('click', mergeBeans);

async function getABean(event) {
    let i=0;
    console.log(event.target);
    if(event.target.alt == "summon bean b"){
        i = 1;
    }

    randPage = Math.floor(Math.random() * 6) + 1;
    // console.log(randPage);

    const url = `https://jellybellywikiapi.onrender.com/api/beans?groupName=Jelly%20Belly%20Official%20Flavors&pageIndex=${randPage}`;
    const response = await fetch(url); 
    let json = await response.json();
    console.log(json);

    randBean = Math.floor(Math.random() * 10);
    
    console.log(json.items[randBean]);

    beans[i].title.textContent = json.items[randBean].flavorName;
    beans[i].desc.textContent = json.items[randBean].description;
    beans[i].img.src = json.items[randBean].imageUrl;
    if(event.target.alt == "summon bean b"){
        beanB = json.items[randBean].flavorName;
        b.style.backgroundColor = json.items[randBean].backgroundColor;
    }
    else{
        beanA = json.items[randBean].flavorName;
        a.style.backgroundColor = json.items[randBean].backgroundColor;
    }
}

async function mergeBeans() {
    console.log("merge time");
    mArea.img.src = "load.png";
    mArea.desc.textContent = "Going through combos, this may take a second";

    console.log(beanA, beanB);
    if(!beanA || !beanB){
        mArea.desc.textContent = "Choose two beans first";
        return;
    }
    containsA = false;
    containsB = false;

    for(let i = 1; i < 55; i++){
        const url = `https://jellybellywikiapi.onrender.com/api/combinations/${i}`;
        const response = await fetch(url); 
        let json = await response.json();
        json.tag.forEach(val => {
            if(val == beanA){
                console.log("A ", val, beanA);
                containsA = true;
            }
            else if(val == beanB){
                console.log("B ", val, beanB);
                containsB = true;
            }
        })
        if((containsA) && (containsB)){
            console.log("Found!!")
            mArea.title.textContent = json.name;
            mArea.desc.textContent = "You found a combo! Your bean ingredients are: ";
            json.tag.forEach(val => {
                mArea.desc.textContent = mArea.desc.textContent + " " + val + " ";
            })
            mArea.img.src = "plate.png";
            return;
        }
        else{
            containsA = false;
            containsB = false;
        }
    }

    if(!containsA || !containsB){
        mArea.title.textContent = "No Flavor Found";
        mArea.desc.textContent = `Sorry, ${beanA} ${beanB} doesn't exist yet, try a different combo`;
        mArea.img.src = "x.png";
    }
}