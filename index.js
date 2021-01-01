// Get pixel color under the mouse.
var robot = require("robotjs");
var Color = require('color');

const targetColor = 'a7c076';
const similarRange = 8;

const targetColorObj = Color(`#${targetColor}`);

setInterval(function() {
  // Get mouse position.
  var mouse = robot.getMousePos();
  // Get pixel color in hex format.
  var hex = robot.getPixelColor(mouse.x, mouse.y);
  console.log("#" + hex + " at x:" + mouse.x + " y:" + mouse.y);

  var color = Color(`#${hex}`);
  console.log(color.hsl().color);
  console.log(targetColorObj.hsl().color);
  // console.log(targetColorObj.hsl().color[0] - color.hsl().color[0]);
  // console.log(targetColorObj.hsl().color[2] - color.hsl().color[2]);

  if ((targetColorObj.hsl().color[0] - color.hsl().color[0] <= similarRange &&
      targetColorObj.hsl().color[0] - color.hsl().color[0] >= (-1) * similarRange) &&
      (targetColorObj.hsl().color[2] - color.hsl().color[2] <= similarRange &&
      targetColorObj.hsl().color[2] - color.hsl().color[2] >= (-1) * similarRange)) {
    console.log('=== click ===');
    robot.mouseClick();

    setTimeout(function() {
      robot.mouseClick();
    }, 5000);
  }
}, 200);
