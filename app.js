var score = 0;

document.getElementById("btn").addEventListener("click", function() {
    score++;
    document.getElementById("score").innerText = score; // Обновляем только значение числа

    document.addEventListener("DOMContentLoaded", function() {
    const tabs = document.querySelectorAll('.tab');
    const body = document.querySelector('body');

    tabs.forEach(tab => {
        tab.addEventListener('click', function() {
            const target = this.getAttribute('data-target');
            body.style.backgroundImage = `url('menu1.png')`;
        });
    });
  });
});
