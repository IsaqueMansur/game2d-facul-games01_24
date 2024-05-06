import { Background } from "./Models/Background.js";
import { Coin } from "./Models/Coin.js";
import { Enemy } from "./Models/Enemy.js";
import { Parallax } from "./Models/Parallax.js";
import { Player } from "./Models/Player.js";
import { Score } from "./Models/Score.js";

let keysPresseds = [];

const PlayerInstance = new Player();
const BackGroundInstance = new Background();
const EnemyInstance = new Enemy();
const ScoreInstance = new Score();
const ParallaxInstance = new Parallax();
const CoinInstance = new Coin();

document.addEventListener("keydown", (event) => {
  if (!keysPresseds.includes(event.key)) keysPresseds.push(event.key);
  PlayerInstance.animationPlayer(keysPresseds);
});
document.addEventListener("keyup", (event) => {
  keysPresseds.pop(event.key);
  PlayerInstance.animationPlayer(keysPresseds);
});

function calculateColisionWithEnemy() {
  const horizontalDifference =
    PlayerInstance.horizontalPosition - EnemyInstance.position;

  if (
    horizontalDifference < 2 &&
    horizontalDifference > -2 &&
    PlayerInstance.verticalPosition > 15
  ) {
    console.log("colisão");
  }
}

function calculateColisionWithCoin() {
  const horizontalDifference =
    PlayerInstance.horizontalPosition - CoinInstance.horizontalLocalization;

  if (
    horizontalDifference < 2 &&
    horizontalDifference > -2 &&
    PlayerInstance.verticalPosition < 20
  ) {
    ScoreInstance.incrementScore();
    CoinInstance.spawnCoin();
  }
}

function startGame() {
  /*   BackGroundInstance.backgroundSpawn(); */
  ScoreInstance.scoreSpawn();
  EnemyInstance.spawnEnemy();
  PlayerInstance.spawnPlayer();
  ParallaxInstance.buildingsSpawn();
  CoinInstance.spawnCoin();

  setInterval(() => {
    calculateColisionWithEnemy();
    calculateColisionWithCoin();
  }, 50);

  setInterval(() => {
    CoinInstance.spawnCoin();
  }, 20000);
}

startGame();
