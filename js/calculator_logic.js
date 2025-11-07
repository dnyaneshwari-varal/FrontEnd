let ans = 0; // global variable to store the answer

function add() {
    let n1 = parseFloat(document.getElementById("n1").value);
    let n2 = parseFloat(document.getElementById("n2").value);
    ans = n1 + n2;
    document.getElementById("res").value = ans;
}

function sub() {
    let n1 = parseFloat(document.getElementById("n1").value);
    let n2 = parseFloat(document.getElementById("n2").value);
    ans = n1 - n2;
    document.getElementById("res").value = ans;
}

function mul() {
    let n1 = parseFloat(document.getElementById("n1").value);
    let n2 = parseFloat(document.getElementById("n2").value);
    ans = n1 * n2;
    document.getElementById("res").value = ans;
}

function div() {
    let n1 = parseFloat(document.getElementById("n1").value);
    let n2 = parseFloat(document.getElementById("n2").value);

    if (n2 === 0) {
        alert("Cannot divide by zero!");
        return;
    }

    ans = n1 / n2;
    document.getElementById("res").value = ans;
}

function showResult() {
    document.getElementById("output").innerHTML = "<h3>The final answer is: " + ans + "</h3>";
}
