
let postcode = "BT6 0JT";
let details = ["Belfast", 44, "Parkview Rd", true, "Kaspar Jarosz", postcode];

///console.table(details);

for(i = 0; i < details.length-1; i++) {
   // console.log(`<p>${details[i]}</p>`);
}


details.forEach(element => {
   console.log(`<div> ${element} </div>`); 
});

