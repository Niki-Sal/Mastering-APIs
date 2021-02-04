//imports
const fetch = require("node-fetch");

//request to a website that return html

// fetch('https://espn.com') //url, endpoint
// .then((response) => {
//     return response.text(); // an extra that happen to see the text
// })
// .then((html)=>{
//     console.log(html)
// });


//request to a third party database that returns json object
// fetch('https://api.github.com/users/niki-sal') //endpoint
// .then(response => {
//     return response.json(); //change this response so we can work with it in javacript
// })
// .then(data =>{
//     console.log(data)
// })


fetch("https://api.spacexdata.com/v3/capsules")
.then(response =>{
    return response.json()
})
.then(dataArray =>{
    console.log(dataArray)//what data type is it? array
    let c102Object = dataArray[1]//what data type is it? object
    let capsuleSerial = c102Object["capsule_serial"]
    console.log(c102Object)
    console.log(capsuleSerial)
})