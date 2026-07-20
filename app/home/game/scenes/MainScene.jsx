import Phaser from "phaser";

export default class MainScene extends Phaser.Scene {
  constructor() {
    super("MainScene");
  }

  preload() {
    this.load.spritesheet("player", "/gif_folder/ballbouncing2-edt.png", {
      frameWidth: 219,
      frameHeight: 330,
    });
  }

  create() {
    this.anims.create({
      key: "walk",
      frames: this.anims.generateFrameNumbers("player", {
        start: 1,
        end: 12,
      }),
      frameRate: 7,
      repeat: -1,
    });

    this.anims.create({
      key: "walk-left",
      frames: this.anims.generateFrameNumbers("player", {
        start: 12,
        end: 1,
      }),
      frameRate: 7,
      repeat: -1,
    });

    const player = this.add.sprite(70, 300, "player");

    player.setScale(0.5);

    player.play("walk");

    //this.tweens.add({
    //  targets: player,
    //   x: 0,
    //  duration: 3000,
    //  ease: "none",
    //  yoyo: true,
    //  repeat: -1,
    //});
    // Create the player as a physics-enabled sprite
    //this.player = this.physics.add.sprite(100, 400, "player");
    //this.player.setScale(0.5);
    //this.player.setFrame(12);
    //this.player.setCollideWorldBounds(true);

    // Invisible ground (static body) so player can land and jump
    //const ground = this.add.rectangle(400, 580, 1600, 40, 0x000000, 0);
    //this.physics.add.existing(ground, true);
    //this.physics.add.collider(this.player, ground);

    //this.cursors = this.input.keyboard.createCursorKeys();
  }

  update() {
    //const speed = 160;
    //const jumpVelocity = -550;

    //if (this.cursors.left.isDown) {
    //  this.player.setVelocityX(-speed);
    //  this.player.play("walk-left", true);
    //} else if (this.cursors.right.isDown) {
    //  this.player.setVelocityX(speed);
    //  this.player.play("walk-right", true);
   // } else {
    //  this.player.setVelocityX(0);
    //  this.player.anims.stop();
    //  this.player.setFrame(12);
   // }
//
    // Jump when up arrow or space pressed, only if on the ground
   // const body = this.player.body;
   // const onGround = body.blocked.down || body.touching.down;
  //  if ((this.cursors.up.isDown || this.cursors.space.isDown) && onGround) {
   //   this.player.setVelocityY(jumpVelocity);
  //  }
  }
}