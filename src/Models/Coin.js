export class Coin {
  body = document.body;
  coinImgPath = "./src/images/coin.png";
  horizontalLocalization;

  spawnCoin() {
    if (document.getElementById("coin")) {
      this.horizontalLocalization = Math.floor(Math.random() * 90) + 1;
      console.log(this.horizontalLocalization);
      document.getElementById(
        "coin"
      ).style.marginLeft = `${this.horizontalLocalization}vw`;
    } else {
      this.horizontalLocalization = Math.floor(Math.random() * 90) + 1;
      this.body.innerHTML += `<img src="${this.coinImgPath}" alt="coin" id="coin" style="margin-left: ${this.horizontalLocalization}vw" />`;
    }
  }
}
