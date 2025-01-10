product = (a,b) => a*b;
try {
    document.getElementById("result").innerHTML = a;
    // If the function is invoked here the result will be displayed
    // If any variable is given error message get displayed
}

catch(err) {
    document.getElementById("result").innerHTML = err.message;
}