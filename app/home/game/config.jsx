import Phaser from "phaser";
import MainScene from "./scenes/MainScene";

const config = {
  type: Phaser.AUTO,
  width: 150,
  height: 800,
  scene: [MainScene],
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: 600 },
      debug: false,
    },
  },
};

export default config;