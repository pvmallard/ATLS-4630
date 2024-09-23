// fetch('https://jellybellywikiapi.onrender.com/api/beans') // fetch API
//     .then(response => console.log(response)
    //.then(header => console.log(header))

// fetch('https://meowfacts.herokuapp.com/') // fetch API
//     .then(response => response.json())
//     .then(json => console.log(json.data[0]));

fetch('https://jellybellywikiapi.onrender.com/api/beans') // fetch API
    .then(response => response.json())
    .then(json => console.log(json));

// const addMeowFactsButton = document.getElementById('more-meow');
// addMeowFactsButton.addEventListener('click', addMeowFactsToPage);

// async function addMeowFactsToPage() { // can use awain in async
//     // console.log("kitty");

//     const count = 3; // could be user input controlled
//     const url = `https://meowfacts.herokuapp.com/?count=${count}`;

//     const response = await fetch(url); // waits for promise to resolve then adding to response
//     const json = await response.json();

//     //console.log(json);
    
//     for (const meowfact of json.data){
//         //console.log(meowfact);

//         //document.body.innerHTML += `<p>${meowfact}</p>`; // this is a bad idea, could download virus, lose event listener, etc

//         const paragraph = document.createElement('p');
//         paragraph.innerText = meowfact;
//         document.body.append(paragraph);
//     }
// };