export class Player {
  constructor() {
    this.playerInterval = null;
  }

  body = document.querySelector("body");
  playerImagePath = "./src/gifs/player.gif";
  horizontalPosition = -90;
  verticalPosition = 33;
  playerRunning = false;
  renderedPlayer;
  intervalPlayerRunning;

  spawnPlayer() {
    this.body.innerHTML += `<img src="${this.playerImagePath}" alt="player" id="player" />`;
    this.renderedPlayer = document.getElementById("player");
    this.renderedPlayer.style.marginTop = "33vh";
    this.renderedPlayer.style.marginLeft = "-90vw";
  }

  jumpPlayer() {
    if (this.verticalPosition !== 33) return;
    const intervalJump = setInterval(() => {
      this.verticalPosition -= 1;
      this.renderedPlayer.style.marginTop = `${this.verticalPosition}vh`;
      if (this.verticalPosition === -5) {
        clearInterval(intervalJump);
        this.fallPlayer();
      }
    }, 10);
  }

  fallPlayer() {
    const intervalFall = setInterval(() => {
      this.verticalPosition += 1;
      this.renderedPlayer.style.marginTop = `${this.verticalPosition}vh`;
      if (this.verticalPosition === 33) clearInterval(intervalFall);
    }, 10);
  }

  movimentHorizontalPlayer(keysPresseds) {
    const indexA = keysPresseds.indexOf("a");
    const indexD = keysPresseds.indexOf("d");

    if (indexA > indexD) {
      if (this.horizontalPosition > -85) {
        this.horizontalPosition -= 2;
      }
    } else {
      if (this.horizontalPosition < 90) {
        this.horizontalPosition += 2;
      }
    }
    console.log(this.horizontalPosition);
    this.renderedPlayer.style.marginLeft = `${this.horizontalPosition}vw`;
  }

  movePlayer(keysPresseds) {
    if (keysPresseds.includes("a") || keysPresseds.includes("d")) {
      if (!this.playerRunning) {
        this.intervalPlayerRunning = setInterval(() => {
          this.movimentHorizontalPlayer(keysPresseds);
        }, 20);
      }
      this.playerRunning = true;
    } else {
      this.playerRunning = false;
      clearInterval(this.intervalPlayerRunning);
    }
    if (keysPresseds.includes("w")) {
      this.jumpPlayer();
    }
  }

  destroyPlayer() {
    this.horizontalPosition = 110;
    clearInterval(this.enemyInterval);
    const enemyRendered = document.querySelectorAll(".enemy");
    enemyRendered.remove();
    setTimeout(() => {
      this.spawnEnemy();
    }, 500);
  }
}
