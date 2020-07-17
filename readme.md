# PIXI.JS Fundamentals

## Example1.js

Starts a PIXI.JS application using `Render({})` constructor instead of `Application({})`. `Application({})` constructor takes care of a lot of boilerplate code.

* Has an event `resize()` to fit the view of the window when resizing.
* Loads and animates a sprite with `Ticker()`.

## Example2.js

* Loads multiple Sprites using `Loader.shared`.
* Loads multiple Events for `Loader` such as `progress`, `load` & `error`.

* Has an event when clicking the Sprite, to stop/start the animation.

## Example3.js

* Uses `Container()` to load assets.
* Uses `addSprites()` to load multiple assets with random `position` and random colors with `tint`.

* Uses `ticker` to make multiple animations & effects.

## Example4.js

Manages multiple Graphics using `Graphics()` constructor.

#### Drawing Shapes

```js
function draw(type, x, y) {
  graphic.lineStyle(5, 0x00ff00);
  graphic.beginFill(0xff0000);
  if (type === "circle") graphic.drawCircle(x, y, 50); // DRAW A CIRCLE
  if (type === "rect") graphic.drawRect(x, y, 50, 50); // DRAW A RECTANGLE
  if (type === "star") graphic.drawStar(x, y, 5, 20, 50); // DRAW A STAR
  if (type === "poligon") graphic.drawPolygon([x, y, -150, 200, -200, 200]) // DRAW POLIGON
  graphic.closePath();
  graphic.endFill();
}
```
#### Drawing Lines

```js
function drawLine(fromX, fromY, toX, toY) {
  graphic.lineStyle(3, 0x00ff00);
  graphic.beginFill(0xff0000);
  graphic.moveTo(fromX, fromY);
  graphic.lineTo(toX, toY);
  graphic.endFill();
}
```

#### Animates a Circle shape

```js
let radius = 20;
let delta = 0;
function animate() {
  delta += 0.04;
  radius = 30 + Math.sin(delta) * 15;

  graphic.clear();
  graphic.beginFill(0xff0000);
  graphic.position.set(100 + Math.sin(delta) * 50)
  graphic.arc(0, 0, radius, 0, Math.PI * 2)
  graphic.endFill();
}
```

## Example5.js

Loads a sprite and applies a filter using `filters`.

```js
DUDE.filters = [new PIXI.filters.BlurFilter()];
```

##### Demos and docs.

* [Filters Demo](https://pixijs.io/pixi-filters/tools/demo/) with every filter effect.
* [Filter Documentation](http://pixijs.download/release/docs/PIXI.filters.html)