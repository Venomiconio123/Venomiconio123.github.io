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
                imageUrl = 'image1.png';
                break;
            case 'menu2':
                imageUrl = 'image2.png';
                break;
            case 'menu3':
                imageUrl = 'image3.png';
                break;
            case 'menu4':
                imageUrl = 'image4.png';
                break;
            default:
                imageUrl = '';
        }
        var imageContainer = document.getElementById('image-container');
        if (imageUrl !== '') {
            imageContainer.innerHTML = '<img src="' + imageUrl + '" alt="Image">';
            imageContainer.style.display = 'block'; // Показываем контейнер с изображением
        } else {
            imageContainer.innerHTML = ''; // Очищаем контейнер, если изображение не найдено
            imageContainer.style.display = 'none'; // Скрываем контейнер, если изображение не найдено
        }
    });
});

});
