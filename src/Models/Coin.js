export class Coin {
  body = document.body;
  coinImgPath = "./src/images/coin.png";
  positionCoin = 100;
  intervalCoin;
  spawnCoin() {
    if (this.intervalCoin) {
      clearInterval(this.intervalCoin);
    }
    this.positionCoin = 100;
    if (document.getElementById("coin")) {
      document.getElementById(
        "coin"
      ).style.marginLeft = `100vw`;
    } else {
      this.body.innerHTML += `<img src="${this.coinImgPath}" alt="coin" id="coin" style="margin-left: ${this.positionCoin}vw" />`;      
    }
    this.intervalCoin = setInterval(() => {
      const coin = document.getElementById("coin");
      this.positionCoin -= 1;
      if (this.positionCoin === -100) this.spawnCoin();
      coin.style.marginLeft = `${this.positionCoin}vw`;
    }, 10)
  }
}
