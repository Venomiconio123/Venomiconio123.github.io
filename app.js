var score = 0;

document.getElementById("btn").addEventListener("click", function() {
    score++;
    document.getElementById("usercard").innerText = "Score: " + score;
});

