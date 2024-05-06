export class Player {
  constructor() {
    this.playerInterval = null;
  }

  body = document.querySelector("body");
  playerImagePath = "./src/gifs/player.gif";
  horizontalPosition = -90;
  verticalPosition = 33;
  playerRunning = false;
  intervalPlayerRunning;

  spawnPlayer() {
    this.body.innerHTML += `<img src="${this.playerImagePath}" alt="player" id="player" />`;
    const renderedPlayer = document.getElementById("player");
    renderedPlayer.style.marginTop = "33vh";
    renderedPlayer.style.marginLeft = "-90vw";
  }

  jumpPlayer() {
    const renderedPlayer = document.getElementById("player");
    if (this.verticalPosition !== 33) return;
    const intervalJump = setInterval(() => {
      this.verticalPosition -= 1;
      renderedPlayer.style.marginTop = `${this.verticalPosition}vh`;
      if (this.verticalPosition === -5) {
        clearInterval(intervalJump);
        this.fallPlayer();
      }
    }, 15);
  }

  fallPlayer() {
    const renderedPlayer = document.getElementById("player");
    const intervalFall = setInterval(() => {
      this.verticalPosition += 1;
      renderedPlayer.style.marginTop = `${this.verticalPosition}vh`;
      if (this.verticalPosition === 33) clearInterval(intervalFall);
    }, 10);
  }

  movimentHorizontalPlayer(keysPresseds) {
    const renderedPlayer = document.getElementById("player");
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
    renderedPlayer.style.marginLeft = `${this.horizontalPosition}vw`;
  }

  animationPlayer(keysPresseds) {
    if (keysPresseds.includes("a") || keysPresseds.includes("d")) {
      if (!this.playerRunning) {
        this.intervalPlayerRunning = setInterval(() => {
          this.movimentHorizontalPlayer(keysPresseds);
        }, 35);
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
}
