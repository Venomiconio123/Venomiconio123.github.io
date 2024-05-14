var score = 0;

document.getElementById("btn").addEventListener("click", function() {
    score++;
    document.getElementById("score").innerText = score; // Обновляем только значение числа
// Находим все кнопки
var buttons = document.querySelectorAll(".tab");

// Находим контейнер с "страницами"
var popupContainer = document.getElementById("popup-container");

// Добавляем обработчик события клика для каждой кнопки
buttons.forEach(function(button) {
    button.addEventListener("click", function() {
        // Получаем значение атрибута data-target кнопки
        var target = button.getAttribute("data-target");
        
        // Находим "страницу" с таким же id и показываем её
        var popup = document.getElementById(target);
        if (popup) {
            popupContainer.style.display = "block";
            popup.style.display = "block";
        }
    });
});
});
