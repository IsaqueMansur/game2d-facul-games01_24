export class Enemy {
  constructor() {
    this.enemyInterval = null;
  }

  body = document.body;
  enemyImagePath = "./src/gifs/michaelJackson.gif";
  position = 110;

  spawnEnemy() {
    this.body.innerHTML += `<img src="${this.enemyImagePath}" alt="enemy" id="enemy" />`;
    setTimeout(() => {
      this.moveEnemy();
    }, 500);
  }

  moveEnemy() {
    const enemy = document.getElementById("enemy");
    this.enemyInterval = setInterval(() => {
      this.position -= 1;
      if (this.position < -110) {
        this.position = 110;
      }
      enemy.style.marginLeft = `${this.position}vw`;
    }, 50);
  }

  destroyEnemy() {
    const enemy = document.getElementById("enemy");
    this.position = 110;
    clearInterval(this.enemyInterval);

    enemy.remove();
    setTimeout(() => {
      this.spawnEnemy();
    }, 500);
  }
}
