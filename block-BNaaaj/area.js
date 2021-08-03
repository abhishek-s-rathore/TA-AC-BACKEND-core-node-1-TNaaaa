function areaCircle(rad) {
  return 2 * 3.14152695 * rad;
}

function areaSquare(side) {
  return side ** 2;
}

function areaRectange(l, b) {
  return l * b;
}

module.exports = {
  areaCircle: areaCircle,
  areaSquare,
  areaRectange,
};
