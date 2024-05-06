export class Score {
  body = document.querySelector("body");
  scorePlayer = 0;
  scoreSpawn() {
    this.body.innerHTML += `<span id="score">Pontuação: ${this.scorePlayer}</span>`;
  }

  incrementScore() {
    this.scorePlayer++;
    document.getElementById(
      "score"
    ).innerHTML = `Pontuação: ${this.scorePlayer}`;
  }
}
