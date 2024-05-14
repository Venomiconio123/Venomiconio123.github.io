var score = 0;

document.getElementById("btn").addEventListener("click", function() {
    score++;
    document.getElementById("score").innerText = score; // Обновляем только значение числа
// Находим все кнопки
    // Находим все кнопки
var tabs = document.querySelectorAll('.tab');

// Добавляем обработчик события клика для каждой кнопки
tabs.forEach(function(tab) {
    tab.addEventListener('click', function() {
        // Получаем значение атрибута data-target
        var targetId = tab.getAttribute('data-target');
        
        // Находим элемент с соответствующим id
        var targetPopup = document.getElementById(targetId);
        
        // Скрываем все элементы с классом popup
        var popups = document.querySelectorAll('.popup');
        popups.forEach(function(popup) {
            popup.style.display = 'none';
        });
        
        // Отображаем выбранный элемент
        targetPopup.style.display = 'block';
    });
});

});
