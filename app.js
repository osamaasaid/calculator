console.log("working");

function divide(){
 var first = document.getElementById("first").value;
 var second = document.getElementById("second").value;
 var result = alert("The result is " + first / second);
 console.log("divided");
}

function multiply(){
 var first = document.getElementById("first").value;
 var second = document.getElementById("second").value;
 var result = alert("The result is " + first * second);
 console.log("mutiplied");
}


function add(){
 var first = document.getElementById("first").value;
 var second = document.getElementById("second").value;
 var result = alert("The result is " + first + second);
 console.log("added");
}

function subtract(){
 var first = document.getElementById("first").value;
 var second = document.getElementById("second").value;
 var result = alert("The result is " + first - second);
 console.log("subtracted");
}