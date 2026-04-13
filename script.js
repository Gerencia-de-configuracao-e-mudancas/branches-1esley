const video = document.getElementById("video");
const botaoPlay = document.getElementById("botao");
const botaoSkip = document.getElementById("botaoSkip");

botaoPlay.addEventListener("click", function () {
    if (video.paused) {
        video.play();
        botaoPlay.textContent = "Pause";
    } else {
        video.pause();
        botaoPlay.textContent = "Play";
    }
});

botaoSkip.addEventListener("click", function () {
    video.currentTime += 10;

});
