export class Background {
  body = document.querySelector("body");
  backgroundImgPath = "./src/images/backgroundWithSolo.png";
  backgroundSpawn() {
    this.body.innerHTML += `<img src="${this.backgroundImgPath}" alt="background" class="background" />`;
  }
}
