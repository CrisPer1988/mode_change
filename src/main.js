const ball = document.querySelector(".ball");

ball.addEventListener("click", function () {
    ball.classList.toggle("ball__active");
    document.body.classList.toggle("darkmode");
});
