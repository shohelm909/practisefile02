//We have Sakib Tamim in our cricket team(add Mr. before every name)
function modifier(string, ...values){
    const m = string.reduce((accum,current)=>{
        return accum + current + (values.length ? "Mr. " + values.shift(): "");
    }, "")
    return m;
}



var player1 = "Sakib";
var player2 = "Tamim";


console.log(modifier`We have ${player1} and ${player2} in our cricket team.`);
var a = 5;
var b = a;


a = 6;


console.log(a);
console.log(b);


var a = {
    name: "Sakib",

};
var b = a;


a.name = "tamim";




console.log(a);
console.log(b);