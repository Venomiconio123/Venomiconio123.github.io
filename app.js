var score = 0;

document.getElementById("btn").addEventListener("click", function() {
    score++;
    document.getElementById("score").innerText = score; // Обновляем только значение числа
    // Находим кнопку по id
// Находим кнопки по атрибуту data-target
var button1 = document.querySelector("[data-target='popup1']");
var button2 = document.querySelector("[data-target='popup2']");
var button3 = document.querySelector("[data-target='popup3']");
var button4 = document.querySelector("[data-target='popup4']");

// Добавляем обработчики события клика для каждой кнопки
button1.addEventListener("click", function() {
    window.open("https://www.youtube.com/watch?v=hchbB9wvAhA", "_blank");
});

button2.addEventListener("click", function() {
    window.open("https://www.youtube.com/watch?v=hchbB9wvAhA", "_blank");
});

button3.addEventListener("click", function() {
    window.open("https://www.youtube.com/watch?v=hchbB9wvAhA", "_blank");
});

button4.addEventListener("click", function() {
    window.open("https://www.youtube.com/watch?v=hchbB9wvAhA", "_blank");
});
});
