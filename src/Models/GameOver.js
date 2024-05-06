export class GameOver {
  constructor(userScore) {
    this.userScore = userScore;
  }

  gameOver() {
    const body = document.body;
    body.innerHTML = `
    <div id="gameOver">
        <h2 class="gameOver">Game Over</h2>
        <span class="score">Pontuação: ${this.userScore}</span>
        <button id="restartButton" onclick="window.location.reload()">Restart</button>
    </div>
        `;
  }
}
