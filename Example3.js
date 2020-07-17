const canvas = document.getElementById('canvas');
const app = new PIXI.Application({
  view: canvas,
  width: 400,
  height: 400
});

let sprite1, sprite2, sprite3;
// Load texture converts it to sprite
const textureBG = new PIXI.Texture.from('assets/sky.png');
const BG = new PIXI.Sprite(textureBG);
const texture1 = new PIXI.Texture.from('assets/bomb.png');
const texture2 = new PIXI.Texture.from('assets/circle.png');
const texture3 = new PIXI.Texture.from('assets/dude.png');
// Setting position
BG.x = app.renderer.screen.width / 2;
BG.y = app.renderer.screen.height / 2;
BG.anchor.x = 0.5;
BG.anchor.y = 0.5;
// Stage BG
app.stage.addChild(BG);

const container = new PIXI.Container();
app.stage.addChild(container);
// Staging sprites
sprite1 = new PIXI.Sprite(texture1);
sprite1.y = 200;
sprite1.tint = 0xff0000;
container.addChild(sprite1);

sprite2 = new PIXI.Sprite(texture2);
sprite2.position.set(300, 200);
container.addChild(sprite2);

sprite3 = new PIXI.Sprite(texture3);
sprite3.position.set(app.renderer.width / 2, app.renderer.height / 2);
sprite3.anchor.set(0.5);
sprite3.pivot.set(0, 100)
container.addChild(sprite3);

let sprites = [];

function addSprites() {
  for (let i = 0; i < 10; i++) {
    const sprite = new PIXI.Sprite(texture2);
    sprite.x = Math.random() * app.renderer.screen.width;
    sprite.y = Math.random() * app.renderer.screen.height;
    sprite.anchor.set(0.5);
    sprite.tint = Math.random() * 0xffffff;
    container.addChild(sprite);
    sprites.push(sprite);
  }
}
addSprites();

let delta = 0;
// Animates
app.ticker.add(spin);

function spin() {
  delta += 0.05;
  sprite1.y = 200 + Math.sin(delta) * 10; // Moves up and down.
  sprite1.alpha = Math.sin(delta); // Toggles opacity.
  sprite2.x = 300 + Math.sin(delta) * 10; 
  sprite2.visible = true; // Visibility
  sprite3.scale = new PIXI.Point(0.5, 0.5); // Scales X,Y
  sprite3.rotation += 0.03; // Rotates

  sprite3.interactive = true;
  sprite3.buttonMode = true;

  container.y = Math.sin(delta) * 10;

  for (let i = 0; i < sprites.length; i++) {
    sprites[i].rotation += 0.1;
  }
}
