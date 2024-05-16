var score = 0;

document.getElementById("btn").addEventListener("click", function() {
    score++;
    document.getElementById("score").innerText = score; // Обновляем только значение числа

    document.getElementById("btn").addEventListener("click", function() {
    // Перенаправление на новую страницу
    window.location.href = "новая_страница.html";
  });
});
