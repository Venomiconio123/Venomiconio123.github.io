var score = 0;

document.getElementById("btn").addEventListener("click", function() {
    score++;
    document.getElementById("score").innerText = score; // Обновляем только значение числа
});

// Переносим этот блок кода изнутри обработчика события клика на кнопке
document.querySelectorAll(".tab").forEach(function(tab) {
    tab.addEventListener("click", function() {
        var target = this.getAttribute("data-target");
        window.location.href = target + ".html"; // Перенаправление на страницу с соответствующим именем
    });
});