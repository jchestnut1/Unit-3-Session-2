//if statments
/*let yourName="Jay";

if(confirm("Are you "+ yourName + "?")){
    console.log("hello " + yourName);
}else{
    console.log("Then what is your name?");
}


//difference == and ===

console.log("1" == 1); //true
console.log("1" === 1); //false
console.log(1 === 1); //true

let number = 99;
if(number == 99){
    console.log("The number is correct");
}

let num1 = Number(prompt("Please enter a number:"));
let num2 = Number(prompt("PLease enter a number:"));

if(num1 < num2){
    console.log("num1 is smaller than num2");
}
else if(num1 > num2){
    console.log("num1 is greater than num2");
}
else{
    console.log("They are equal");
}
*/


let num1 = 1;
let num2 = 2;
let num3 = 3;
let notTrue = false;

if(num1<num2 && num3>num2){
    console.log("num1 is smaller than num2 AND num3 is larger than num2");
}

if(num1 == 1 || num2 == 1 || num3 == 1){
    console.log("num1 is 1 OR num2 is 1 OR num3 is 1");
}

if(!notTrue){
    console.log("not not true us true");
}