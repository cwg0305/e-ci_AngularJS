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
//this function get x and y and run operation functions and display it in the brower.
function displayAnswer() {

    var z; 
    //validation check. user only can enter number.
    var no1 = document.getElementById("number1").value;
    var validation = /^[0-9]+[.]?[0-9]*$/g;
    if (no1.match(validation)) {
        var x = no1.match(validation);
    } else {
        alert("Please enter number only");
        return;
    }
    var no2 = document.getElementById("number2").value;
    if (no2.match(validation)) {
        var y = no2.match(validation);
    } else {
        alert("Please enter number only");
        return;
    }
    var op = document.getElementById("operation").value;

    //this takes only numbers from number1 and number2
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

    document.getElementById("answer").innerHTML=z;

}