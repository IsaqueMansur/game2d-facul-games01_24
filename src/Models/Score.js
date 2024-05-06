export class Score {
  body = document.body;
  scorePlayer = 0;
  scoreSpawn() {
    this.body.innerHTML += `<span id="score">Pontuação: ${this.scorePlayer}</span>`;
  }

  incrementScore() {
    const captureCoinAudio = new Audio("./src/sounds/captureCoin.mp3");
    this.scorePlayer++;
    document.getElementById(
      "score"
    ).innerHTML = `Pontuação: ${this.scorePlayer}`;
    captureCoinAudio.play();
    setTimeout(() => {
      captureCoinAudio.pause();
    }, 500);
  }
}
