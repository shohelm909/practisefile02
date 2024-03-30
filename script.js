/*var x = 10;
var y = 5;
var z = x + y;
var myObj = {
    name: "Javascript",
    founder: "Brendan Eich",
    estd: "1995",
    randkin: 1,
    x: x,
    y: y,
    z: z,
}*/
var x = 10;
var y = 5;
var z = x + y;
var myObj = {
    name: "Javascript",
    founder: "Brendan Eich",
    estd: "1995",
    randkin: 1,
    x,
    y,
    z,
}

document.write(myObj.name);
var keys = Object.keys(myObj);
document.write(keys);
console.log(keys);
var values = Object.values(myObj);
console.log(values);
var entries = Object.entries(myObj);
console.log(entries);
var properties = {
    name: "Javascript",
    date: "1995",
    founder: "Brenden"
}

for (x in properties){
    console.log(properties[x]);
}

let element = [1,2,3,4,5,6,7,8,];


/*for(x in element){
    console.log(x)
}*/
for (x of element){
    console.log(x);
    console.log(element[x])
}

let myStr = "I love to play with javascript";

for ( x in  myStr){
    console.log(x);
}
for(x of myStr){
    console.log(x);
}
var obj = {
    name: "Javascript",
    date: "1995",
    founder: "Brenden"
}

var keys = Object.keys(obj);
console.log(keys)

var values = Object.values(obj);
console.log(values);
var entries = Object.entries(obj);
console.log(entries);