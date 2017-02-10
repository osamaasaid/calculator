// to check if the app works
console.log("working");


//the same function is used to perform all operations with different operators

//division
function divide(){
 var first = document.getElementById("first").value;
 var second = document.getElementById("second").value;
 var result = alert("The result is " + first / second);
 console.log("divided");
}

//multiplication
function multiply(){
 var first = document.getElementById("first").value;
 var second = document.getElementById("second").value;
 var result = alert("The result is " + first * second);
 console.log("mutiplied");
}

//addition
function add(){
 var first = document.getElementById("first").value;
 var second = document.getElementById("second").value;
 var result = alert("The result is " + first + second);
 console.log("added");
}

//subtraction
function subtract(){
 var first = document.getElementById("first").value;
 var second = document.getElementById("second").value;
 var result = alert("The result is " + first - second);
 console.log("subtracted");
}