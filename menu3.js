document.querySelectorAll(".tab").forEach(function(tab) {
    tab.addEventListener("click", function() {
        var target = this.getAttribute("data-target");
        window.location.href = target + ".html"; // Перенаправление на страницу с соответствующим именем
    });
});

document.querySelectorAll(".character-button").forEach(function(button) {
    button.addEventListener("click", function() {
        var cost = parseInt(this.getAttribute("data-cost"));
        var balance = getBalance(); // Функция для получения текущего баланса
        if (balance >= cost) {
            updateBalance(balance - cost); // Функция для обновления баланса
            levelUpCharacter(this); // Функция для прокачки персонажа
            alert('Персонаж приобретен!');
        } else {
            alert('Недостаточно монет для покупки этого персонажа.');
        }
    });
});

function getBalance() {
    // Здесь необходимо реализовать получение текущего баланса игрока
    return 1000; // Пример
}

function updateBalance(newBalance) {
    // Здесь необходимо реализовать обновление баланса игрока
    console.log('Новый баланс: ' + newBalance);
}

function levelUpCharacter(button) {
    // Здесь необходимо реализовать логику прокачки персонажа
    console.log('Персонаж прокачан: ' + button.querySelector('p').innerText);
}
