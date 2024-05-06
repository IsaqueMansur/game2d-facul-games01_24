import { Background } from "./Models/Background.js";
import { Enemy } from "./Models/Enemy.js";
import { Player } from "./Models/Player.js";
import { Score } from "./Models/Score.js";

let keysPresseds = [];

const PlayerInstance = new Player();
const BackGroundInstance = new Background();
const EnemyInstance = new Enemy();
const ScoreInstance = new Score();

document.addEventListener("keydown", (event) => {
  if (!keysPresseds.includes(event.key)) keysPresseds.push(event.key);
  PlayerInstance.movePlayer(keysPresseds);
});
document.addEventListener("keyup", (event) => {
  keysPresseds.pop(event.key);
  PlayerInstance.movePlayer(keysPresseds);
});

function calculateColision() {
  const horizontalDifference =
    PlayerInstance.horizontalPosition - EnemyInstance.position;

  if (
    horizontalDifference < 2 &&
    horizontalDifference > -2 &&
    PlayerInstance.verticalPosition > 25
  ) {
    alert("colisão");
  }
  console.log(horizontalDifference);
}

function startGame() {
  /*   BackGroundInstance.backgroundSpawn(); */
  ScoreInstance.scoreSpawn();
  EnemyInstance.spawnEnemy();
  PlayerInstance.spawnPlayer();
  setInterval(() => {
    calculateColision();
  }, 50);
}

startGame();
