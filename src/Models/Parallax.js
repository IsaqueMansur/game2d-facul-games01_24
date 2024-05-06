export class Parallax {
  body = document.querySelector("body");
  buildingsPath = "./src/images/buildings.png";
  positionBuildings1 = 0;
  positionBuildings2 = 200;
  buildingsSpawn() {
    this.body.innerHTML += `<img src="${this.buildingsPath}" alt="buildings" id="buildings" />`;
    this.body.innerHTML += `<img src="${this.buildingsPath}" alt="buildings" id="buildings2" />`;
    const buildings2 = document.getElementById("buildings2");
    buildings2.style.marginLeft = "200vw";
    this.animateBuildings();
  }

  animateBuildings() {
    const buildings = document.getElementById("buildings");
    const buildings2 = document.getElementById("buildings2");
    setInterval(() => {
      this.positionBuildings1 -= 1;
      this.positionBuildings2 -= 1;
      buildings.style.marginLeft = `${this.positionBuildings1}vw`;
      buildings2.style.marginLeft = `${this.positionBuildings2}vw`;
      if (this.positionBuildings1 < -200) {
        this.positionBuildings1 = 200;
        buildings.style.marginLeft = `${this.positionBuildings1}vw`;
      }
      if (this.positionBuildings2 < -200) {
        this.positionBuildings2 = 200;
        buildings2.style.marginLeft = `${this.positionBuildings2}vw`;
      }
    }, 100);
  }
}
