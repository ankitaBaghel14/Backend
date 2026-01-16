function cap(s) {
  return s[0].toUpperCase() + s.slice(1);
}

function rev(s) {
  return s.split("").reverse().join("");
}

function vCount(s) {
  let m = s.match(/[aeiou]/gi);
  return m ? m.length : 0;
}

module.exports = { cap, rev, vCount };
