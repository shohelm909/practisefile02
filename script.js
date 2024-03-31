var user ={
    id:339,
    name: "Sakib",
    age: 35,
    education: {
        degree: "Masters",
    }
}
//var name = user["name"];
//const {name}=user;
//const {name:title} = user;

//console.log(title); 
const {education: {degree : x}, } = user;

console.log(x)
var user ={
    id:339,
    name: "Sakib",
    age: 35,
    
}
//kone property jodi missing thake and tar default value set korar jonne 
var {education:{degree} = {}} = user;
console.log(degree);

var number = [1,2,3,4,5,6,7,8];

//var [a,b] = number;
//console.log(a,b);

var [ , , , , ,a, , b] = number;
console.log(a,b);
var number = [1,2,[3,100,500],4,5,6,7,8];
var [, , [,a,b]] = number;
console.log(a,b);


//value swaping
//in old way
var a = 5;
var b = 10;

var temp = a;

var a = b;
var b = temp;

// in new way
[b,a]=[b,a];

console.log(a);
console.log(b);