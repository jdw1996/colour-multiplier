const CANVAS_SIDE = 500;
const CANVAS_SIDE_HALF = CANVAS_SIDE * 0.5;
const TRIANGLE_SIDE = CANVAS_SIDE * 0.3;
const CIRCLE_RADIUS = TRIANGLE_SIDE * 2;
const TRIANGLE_HEIGHT = TRIANGLE_SIDE * Math.sqrt(3) * 0.5;
const TOP_VERTEX_Y = (CANVAS_SIDE - TRIANGLE_HEIGHT) * 0.5;
const BOT_VERTEX_Y = TOP_VERTEX_Y + TRIANGLE_HEIGHT;
const SW_VERTEX_X = (CANVAS_SIDE - TRIANGLE_SIDE) * 0.5;
const SE_VERTEX_X = CANVAS_SIDE - SW_VERTEX_X;

const HTML_COLOUR_FORMAT = "#rrggbb";

function multiplyColours(c1, c2) {
  return color(
    (red(c1) * red(c2)) / 255,
    (green(c1) * green(c2)) / 255,
    (blue(c1) * blue(c2)) / 255
  );
}

function redrawCircles(c1, c2, c3) {
  blendMode(BLEND);
  stroke(255);
  fill(255);
  rect(0, 0, CANVAS_SIDE, CANVAS_SIDE);

  blendMode(MULTIPLY);
  strokeWeight(10);
  stroke(0);

  fill(c1);
  circle(CANVAS_SIDE_HALF, TOP_VERTEX_Y, CIRCLE_RADIUS);

  fill(c2);
  circle(SW_VERTEX_X, BOT_VERTEX_Y, CIRCLE_RADIUS);

  fill(c3);
  circle(SE_VERTEX_X, BOT_VERTEX_Y, CIRCLE_RADIUS);
}

function applyMultiplication() {
  const p1 = color(document.getElementById("p1").value);
  const p2 = color(document.getElementById("p2").value);
  const p3 = color(document.getElementById("p3").value);

  document.getElementById("s1").value = multiplyColours(p1, p2).toString(
    HTML_COLOUR_FORMAT
  );
  document.getElementById("s2").value = multiplyColours(p2, p3).toString(
    HTML_COLOUR_FORMAT
  );
  document.getElementById("s3").value = multiplyColours(p3, p1).toString(
    HTML_COLOUR_FORMAT
  );

  document.getElementById("t").value = multiplyColours(
    multiplyColours(p1, p2),
    p3
  ).toString(HTML_COLOUR_FORMAT);

  redrawCircles(p1, p2, p3);
}

function setup() {
  colorMode(RGB, 255, 255, 255, 1);

  let canvas = createCanvas(CANVAS_SIDE, CANVAS_SIDE);
  canvas.parent("mycanvas");
  background(255);

  applyMultiplication();
}

function draw() {
  applyMultiplication();
}
