const arr = [60, 30, 10, 20, 90, 50,80, 70, 40];

document.getElementById("show_array").innerHTML = arr;

function asc() {
    arr.sort(function (a, b) {
        return a - b;
    });
    document.getElementById("show_array").innerHTML = "The ascending order of the data are " +arr;
}
function dsc() {
    arr.sort(function (a, b) {
        return b - a;
    });
    document.getElementById("show_array").innerHTML = "The descending order of the data are " +arr;
}
function square() {
    const mapped_arr = arr.map(function (e) {
        return e * e;
    });
    document.getElementById("mapped_array").innerHTML = mapped_arr;
}