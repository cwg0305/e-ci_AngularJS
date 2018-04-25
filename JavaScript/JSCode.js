//this returns the value of x + y 
function addition(x,y) {
    return x+y;
}
//this returns the value of x - y 
function subtraction(x,y) {
    return x-y;
}
//this returns the value of x x y 
function multiplication(x,y) {
    return x*y;
}
//this returns the value of x / y 
function division(x,y) {
    return x/y;
}
//this returns the value of x to the power of y
function squareRoot(x,y) {
    return Math.pow(x,y);
}
//validate input. User only can enter numbers. If user enter others it will alert.
function validate(x) {
    var input = x;
    var validation = /^[0-9]+[.]?[0-9]*$/g;
    if (!input.match(validation)) {
        alert("Please enter number");
        exit();
    } else {
        return Number (input);
    }
}
//this function get x and y and run operation functions and display it in the brower.
function displayAnswer() {

    var z; 
    var op = document.getElementById("operation").value;
    //validation check. user only can enter numbers.
    var input1 = document.getElementById("number1").value;
    var x = validate(input1);
    var input2 = document.getElementById("number2").value;
    var y = validate(input2);
    //check and validate operation type
    switch(op) {
        case "+":
            z = addition(x,y);
            break;
        case "-":
            z = subtraction(x,y);
            break;
        case "*":
            z = multiplication(x,y);
            break;
        case "/":
            z = division(x,y);
            break;
        case "^":
            z = squareRoot(x,y);
            break;
        default: 
            alert("Please enter right operation! (+,-,*,/ or ^)");
            return;
            
    }	
    document.getElementById("answer").value=z;
}