var score = 0;

document.getElementById("btn").addEventListener("click", function() {
    score++;
    document.getElementById("score").innerText = score; // Обновляем только значение числа

    document.getElementById("tab").addEventListener("click", function() {
    // Перенаправление на новую страницу
    window.location.href = "menu1.html";
  });
});
