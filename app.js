var score = 0;

document.getElementById("btn").addEventListener("click", function() {
    score++;
    document.getElementById("score").innerText = score; // Обновляем только значение числа
    // Находим кнопку по id
var button2 = document.getElementById("button2");

// Добавляем обработчик события клика на кнопку
button2.addEventListener("click", function() {
    // Открываем новое окно при клике на кнопку
    window.open("https://www.youtube.com/watch?v=G8ULehlYznw", "_blank");
});

});
