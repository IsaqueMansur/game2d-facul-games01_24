import { Background } from "./Models/Background.js";
import { Enemy } from "./Models/Enemy.js";
import { Player } from "./Models/Player.js";

let keysPresseds = [];

const PlayerInstance = new Player();
const BackGroundInstance = new Background();
const EnemyInstance = new Enemy();

document.addEventListener("keydown", (event) => {
  if (!keysPresseds.includes(event.key)) keysPresseds.push(event.key);
  PlayerInstance.movePlayer(keysPresseds);
});
document.addEventListener("keyup", (event) => {
  keysPresseds.pop(event.key);
  PlayerInstance.movePlayer(keysPresseds);
});

function startGame() {
  /*   BackGroundInstance.backgroundSpawn(); */
  EnemyInstance.spawnEnemy();
  PlayerInstance.spawnPlayer();
}

startGame();
