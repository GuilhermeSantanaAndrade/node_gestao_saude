export function minMaxRandom(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

Number.prototype.pad = function (size) {
  var s = String(this);
  while (s.length < (size || 2)) { s = "0" + s; }
  return s;
}