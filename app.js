let tg = window.Telegram.WebApp;

tg.expand();

let score = 0;

let btn1 = document.getElementById("btn1");

btn1.addEventListener("click", function(){
    score++;
    if (tg.MainButton.isVisible) {
        tg.MainButton.hide();
    }
    else {
        tg.MainButton.setText("Вы выбрали товар 1!");
        tg.MainButton.show();
    }
    updateScore();
});

Telegram.WebApp.onEvent("mainButtonClicked", function(){
    tg.sendData("1");
    score++;
    updateScore();
});

function updateScore() {
    let usercard = document.getElementById("usercard");
    usercard.innerText = "Score: " + score;
}

let p = document.createElement("p");
p.innerText = `${tg.initDataUnsafe.user.first_name} ${tg.initDataUnsafe.user.last_name}`;
usercard.appendChild(p);
