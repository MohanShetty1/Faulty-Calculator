let x=parseFloat(prompt("Enter x value:")); //if only prompt is used it takes the input as a string and multiplication operation will not be performed. So using parsefloat helps to take the input as int or float.
let y=parseFloat(prompt("Enter y value:"));
let counter=Math.random();
function faultycalc(x,y){
    console.log("Addition is :",x-y)
    console.log("Subtraction is :",x/y)
    console.log("Multiplication is :",x+y)
    console.log("Division is :",x*y)
}

function wellcalc(x,y){
    console.log("Addition is:",x+y)
    console.log("Subtraction is:",x-y)
    console.log("Multiplication is:",x*y)
    console.log("Division is:",x/y)
}
if(counter>0.1){    //if counter(a random number) is greater than 0.1 the normal calc will be performed otherwise faulty will be performed.
    wellcalc(x,y);
   
}else{
    faultycalc(x,y);
}

