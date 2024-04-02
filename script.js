function modifier(string, ...values){
    console.log(string);
    console.log(values)
}

var player1 = "Sakib";
var player2 = "Tamim";

console.log(modifier`We have ${player1} and ${player2} in our cricket team`)

var num = [1,2,3];
var num2 = num.unshift(4);

var num1 = num.map((x)=>{
    return x*x;
})

console.log(num1);


var sum = num.reduce((accum,current)=>{
    return accum * current;
},5)

console.log(sum);