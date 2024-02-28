var outputsc = document.getElementById("output");

function display(num) {
    if (num == "*") {
        num = "x";
    }
 
    outputsc.textContent += num;
}
function calculate() {
    try {
    
        expression = outputsc.textContent.replace(/x/g, '*');

        outputsc.textContent = eval(expression);
    }
    catch (err) {
        alert("Invalid");
    }

}
function clearEntry() {
    outputsc.textContent = "";
}
function del() {
    outputsc.textContent = outputsc.textContent.slice(0, -1);
}
function square(){
    outputsc.textContent=outputsc.textContent*outputsc.textContent;
}