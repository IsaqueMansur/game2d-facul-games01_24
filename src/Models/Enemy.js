export class Enemy {
  constructor() {
    this.enemyInterval = null;
  }

  body = document.querySelector("body");
  enemyImagePath = "./src/gifs/michaelJackson.gif";
  position = 110;

  enemySpawn() {
    this.body.innerHTML += `<img src="${this.enemyImagePath}" alt="enemy" class="enemy" />`;
    this.moveEnemy();
  }

  moveEnemy() {
    const enemyRendered = document.querySelector(".enemy");
    this.enemyInterval = setInterval(() => {
      this.position -= 1;
      /* if (this.position < -110) {
        this.destroyEnemy();
        this.enemySpawn();
      } */
      enemyRendered.style.marginLeft = `${this.position}vw`;
    }, 5);
  }

  destroyEnemy() {
    this.position = 110;
    clearInterval(this.enemyInterval);
    const enemyRendered = document.querySelector(".enemy");
    enemyRendered.remove();
    setTimeout(() => {
      this.enemySpawn();
    }, 500);
  }
}
