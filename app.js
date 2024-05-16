var score = 0;
var maxClicks = 10; // Максимальное количество нажатий

document.getElementById("btn").addEventListener("click", function() {
    if (score < maxClicks) {
        score++;
        document.getElementById("score").innerText = score; // Обновляем только значение числа
    } else {
        alert("Вы достигли максимального количества нажатий.");
    }
});

// Переносим этот блок кода изнутри обработчика события клика на кнопке
document.querySelectorAll(".tab").forEach(function(tab) {
    tab.addEventListener("click", function() {
        var target = this.getAttribute("data-target");
        window.location.href = target + ".html"; // Перенаправление на страницу с соответствующим именем
    });
});

