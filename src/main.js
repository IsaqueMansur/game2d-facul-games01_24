import { Background } from "./Models/Background.js";
import { Enemy } from "./Models/Enemy.js";

function startGame() {
  const BackGroundInstance = new Background();
  const EnemyInstance = new Enemy();
  BackGroundInstance.backgroundSpawn();
  EnemyInstance.enemySpawn();
}

startGame();
