var myObj = {
    name: "Javascript",
    founder: "Brendan Eich",
    estd: "1995",
    randkin: 1,
}

document.write(myObj.name);
var keys = Object.keys(myObj);
document.write(keys);
console.log(keys);
var values = Object.values(myObj);
console.log(values);