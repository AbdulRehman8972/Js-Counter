// count game

const addbtn = document.getElementById("addbtn");
const minusbtn = document.getElementById("decreasebtn");
const resetbtn = document.getElementById("resetbtn");
const label = document.getElementById("label");
let count = 0;

// Increase count
addbtn.onclick = function() {
    count++;
    label.textContent = count;
}

// Decrease count
minusbtn.onclick = function() {
    count--;
    label.textContent = count;
}

// Reset count
resetbtn.onclick = function() {
    count = 0;
    label.textContent = count;
}
