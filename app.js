var score = 0;

document.getElementById("btn").addEventListener("click", function() {
    score++;
    document.getElementById("score").innerText = "Score: " + score; // Обновляем значение счетчика
    
    document.addEventListener("DOMContentLoaded", function() {
    var tabs = document.querySelectorAll('.tab');

    tabs.forEach(function(tab) {
        tab.addEventListener('click', function(event) {
            event.preventDefault(); // Предотвращаем переход по ссылке

            var targetId = tab.getAttribute('data-target');
            var popup = document.getElementById(targetId);
            if (popup) {
                popup.style.display = 'block';
            }
         });
      });
   });
});
