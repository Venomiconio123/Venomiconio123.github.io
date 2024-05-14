var score = 0;

document.getElementById("btn").addEventListener("click", function() {
    score++;
    document.getElementById("score").innerText = score; // Обновляем только значение числа
    
// Получаем ссылку на модальное окно
var modal = document.getElementById("myModal");

// Получаем ссылку на изображение в модальном окне
var modalImg = document.getElementById("modal-image");

// Получаем ссылку на элемент, который закрывает модальное окно
var span = document.getElementsByClassName("close")[0];

// Функция для открытия модального окна с изображением
function openModal(imageUrl) {
  modal.style.display = "block";
  modalImg.src = imageUrl;
}

// Функция для закрытия модального окна
span.onclick = function() {
  modal.style.display = "none";
}

// Закрываем модальное окно, если пользователь кликает вне его области
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
    
});
