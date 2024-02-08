const randNum = Math.floor(Math.random() * 100) + 1;
let triesLeft = 5;

let btn = document.querySelector("button");

btn.addEventListener('click', function() {
    if (triesLeft > 0) {
        let textVal = document.querySelector("input").value;
        if (textVal < randNum) {
            document.querySelector(".msg").innerHTML = "Number is higher";
            document.querySelector("input").value = "";
            document.querySelector("input").focus();
            triesLeft--;
        } else if (textVal > randNum) {
            document.querySelector(".msg").innerHTML = "Number is lower";
            document.querySelector("input").value = "";
            document.querySelector("input").focus();
            triesLeft--;
        } else {
            document.querySelector(".wrapper").innerHTML = "<h1>Number is Correct</h1>";
        }
        if (triesLeft < 1) {
            document.querySelector(".wrapper").innerHTML = "<h1>Out of Tries!</h1>";
        }
    }
})
