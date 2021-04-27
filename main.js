const HTML_COLOUR_FORMAT = "#rrggbb";

function multiplyColours(c1, c2) {
  return color(
    (red(c1) * red(c2)) / 255,
    (green(c1) * green(c2)) / 255,
    (blue(c1) * blue(c2)) / 255
  );
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
}

function setup() {
  colorMode(RGB, 255, 255, 255, 1);
  applyMultiplication();
}

function draw() {
  applyMultiplication();
}
