async function product(a,b) {
    let response = await a * b;
    display(response);
}
function display(some) {
    document.getElementById("result").innerHTML = "Required answer: " +some;
}
product(5,29);