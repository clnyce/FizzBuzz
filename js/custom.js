//FizzBuzz Function
document.getElementById("btnFizz").addEventListener("click", function(){

    //This assigns the input numbers to variables
    let numFizz = parseInt(document.getElementById("numFizz").value);
    let numBuzz = parseInt(document.getElementById("numBuzz").value);
 
    //Create an array to display on sceen
    let fizzBuzz = "";
 
    //Check to ensure both numbers entered are between 1 and 100
    if (numFizz > 100 || numBuzz > 100) {
        alert("Please enter a number between 1 and 100.");
        ClearFizzBuzzData();
        return;
    }
    if (numFizz < 1 || numBuzz < 1) {
        alert("Please enter a number between 1 and 100.");
        ClearFizzBuzzData();
        return;
    }
 
    //Loop through numbers 1 through 100 and determine if each number is a fizz, buzz, or fizzbuzz
    //Store results in fizzBuzz array
    for (k = 1; k < 101; k++) {
        if ((k % numFizz == 0) && (k % numBuzz == 0)) {
            if (k == 100) {
                fizzBuzz += "<b><font color='red'>FizzBuzz</font></b>";
            }
            else {
                fizzBuzz += "<b><font color='red'>FizzBuzz</font></b>" + ", ";
            }
        }
        else if ((k % numFizz == 0)) {
            if (k == 100) {
                fizzBuzz += "<b><i><font color='blue'>Fizz</font></i></b>";
            }
            else {
                fizzBuzz += "<b><i><font color='blue'>Fizz</font></i></b>" + ", ";
            }
        }
        else if ((k % numBuzz == 0)) {
            if (k == 100) {
                fizzBuzz += "<b><i><font color='orange'>Buzz</font></i></b>";
            }
            else {
                fizzBuzz += "<b><i><font color='orange'>Buzz</font></i></b>" + ", ";
            }
        }
        else {
            if (k == 0) {
                fizzBuzz += k;
            }
            fizzBuzz += k + ", ";
        }
    }
 
    //Display multiples on screen
    document.getElementById('resultsFizzBuzz').innerHTML = fizzBuzz;
});

function ClearFizzBuzzData(){
    document.getElementById("numFizz").value = "";
    document.getElementById("numBuzz").value = "";
}