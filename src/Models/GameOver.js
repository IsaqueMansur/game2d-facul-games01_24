export class GameOver {
  constructor(userScore) {
    this.userScore = userScore;
  }

  gameOverAudio = new Audio("./src/sounds/gameOver.mp3");

  gameOver() {
    const body = document.body;
    this.gameOverAudio.play();
    body.innerHTML = `
    <div id="gameOver">
        <h2 class="gameOver">Game Over</h2>
        <span class="score">Pontuação: ${this.userScore}</span>
        <button id="restartButton" onclick="window.location.reload()">Restart</button>
    </div>
        `;
  }
}
