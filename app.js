var score = 0;

document.getElementById("btn").addEventListener("click", function() {
    score++;
    document.getElementById("score").innerText = score; // Обновляем только значение числа

    // Получаем все кнопки вкладок
var tabs = document.querySelectorAll('.tab');

// Добавляем обработчик события для каждой кнопки
tabs.forEach(function(tab) {
    tab.addEventListener('click', function() {
        // Получаем значение атрибута data-target, которое указывает на соответствующую вкладку
        var target = this.getAttribute('data-target');
        
        // Скрываем все содержимое вкладок
        var tabContents = document.querySelectorAll('.tab-content');
        tabContents.forEach(function(content) {
            content.style.display = 'none';
        });
        
        // Отображаем содержимое выбранной вкладки
        var selectedTabContent = document.getElementById(target);
        selectedTabContent.style.display = 'block';
        
        // Дополнительные действия, которые можно выполнить при активации вкладки
        // Например, изменение стилей кнопок
        tabs.forEach(function(tab) {
            tab.classList.remove('active');
        });
        this.classList.add('active');
    });
  });
});
