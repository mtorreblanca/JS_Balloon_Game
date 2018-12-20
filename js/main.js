// useful to have them as global variables
var canvas, ctx, w, h;
 
 
window.onload = function init() {
  // Called AFTER the page has been loaded
  canvas = document.querySelector("#myCanvas");
  // Often useful
  w = canvas.width;
  h = canvas.height;
  // Important, we will draw with this object
  ctx = canvas.getContext('2d');
  // Ready to go!
  // Try to change the parameter values to move
  // the monster
  drawMyMonster(10, 10); // try to change that
};
 
function drawMyMonster(x, y) {
  // Draw a big monster!
  // Head
  // BEST practice: save the context, use 2D transformations
  ctx.save();
  // Translate the coordinate system, draw relative to it
  ctx.translate(x, y);
  // (0, 0) is the top left corner of the monster.
  ctx.strokeRect(0, 0, 100, 100);
  // Eyes
  ctx.fillRect(20, 20, 10, 10);
  ctx.fillRect(65, 20, 10, 10);
  // Nose
  ctx.strokeRect(45, 40, 10, 40);
  // Mouth
  ctx.strokeRect(35, 84, 30, 10);
  // Teeth
  ctx.fillRect(38, 84, 10, 10);
  ctx.fillRect(52, 84, 10, 10);
  // BEST practice: restore the context
  ctx.restore();
}