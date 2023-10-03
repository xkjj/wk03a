

console.log("my world is JS.");


let city = "Belfast";
let houseNumber = 44;
let owned = true;
const addressSt = "parkview road";
let ownerName = "Kaspar Jarosz";


/*houseNumber = "forty four";
let message = "I am " +ownerName + " and I own " +houseNumber + " " +addressSt + ", " +city + "."
console.log(message);
let html = "<p class='row'> I am " +ownerName + " and I own " +houseNumber + " " +addressSt + ", " +city + ".</p>";
console.log(html);
*/


let message2 = `<div class='row'> I am ${ownerName} and I own ${houseNumber} ${addressSt} ${city}. </div>`;
//console.log(message2);

let person = "its me";

if(typeof person != 'undefined') {
    console.log(`Welcome ${person} to my blog.`);
}else {
    console.log(`Welcome guest to my blog.`);
}

//console.log(typeof person);