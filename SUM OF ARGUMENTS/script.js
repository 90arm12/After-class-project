function sumALL() {
    var sum=0;
    for(i=0; i<arguments.length; i++){
        sum+=arguments[i];
    }
    return sum;
}
document.getElementById("demo").innerHTML = sumALL(1,2,3,4);
var value= Math.sin(45);
document.write("Sin 45 is: " +value+"<br>");
var value = Math.cos(45);
document.write("Cos 45 is: " + value + "<br>");
var value = Math.tan(45);
document.write("Tan 45 is: " + value + "<br>");