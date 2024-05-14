var score = 0;

document.getElementById("btn").addEventListener("click", function() {
    score++;
    document.getElementById("score").innerText = score; // Обновляем только значение числа
    
document.querySelectorAll('.tab').forEach(function(tab) {
    tab.addEventListener('click', function() {
        var target = this.getAttribute('data-target');
        var imageUrl = ''; // Установите соответствующий URL изображения для каждой кнопки
        switch(target) {
            case 'menu1':
                imageUrl = '2.png';
                break;
            case 'menu2':
                imageUrl = '2.png';
                break;
            case 'menu3':
                imageUrl = '2.png';
                break;
            case 'menu4':
                imageUrl = '2.png';
                break;
            default:
                imageUrl = '';
        }
        var imageContainer = document.getElementById('image-container');
        if (imageUrl !== '') {
            if (imageContainer.style.display === 'block' && imageContainer.getAttribute('data-target') === target) {
                // Если изображение уже открыто и пользователь нажимает на ту же кнопку, скрываем его
                imageContainer.innerHTML = ''; // Очищаем контейнер с изображением
                imageContainer.style.display = 'none'; // Скрываем контейнер
            } else {
                // Если изображение еще не открыто или пользователь нажимает на другую кнопку, открываем изображение
                imageContainer.innerHTML = '<img src="' + imageUrl + '" alt="Image">';
                imageContainer.style.display = 'block'; // Показываем контейнер с изображением
                imageContainer.setAttribute('data-target', target); // Устанавливаем атрибут data-target для хранения текущего целевого значения
            }
        } else {
            imageContainer.innerHTML = ''; // Очищаем контейнер, если изображение не найдено
            imageContainer.style.display = 'none'; // Скрываем контейнер, если изображение не найдено
        }
    });
});


});
