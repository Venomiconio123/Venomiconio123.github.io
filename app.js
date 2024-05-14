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
        document.getElementById('image-container').innerHTML = '<img src="' + imageUrl + '" alt="Image">';
    });
  });
});
