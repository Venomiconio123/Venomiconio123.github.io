document.querySelectorAll(".tab").forEach(function(tab) {
    tab.addEventListener("click", function() {
        var target = this.getAttribute("data-target");
        window.location.href = target + ".html"; // Перенаправление на страницу с соответствующим именем
    });
});
