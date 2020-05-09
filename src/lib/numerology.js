const mapLetterToNumber = {
  a: 1,
  b: 2,
  c: 3,
  d: 4,
  e: 5,
  f: 6,
  g: 7,
  h: 8,
  i: 9,
  j: 1,
  k: 2,
  l: 3,
  m: 4,
  n: 5,
  o: 6,
  p: 7,
  q: 8,
  r: 9,
  s: 1,
  t: 2,
  u: 3,
  v: 4,
  w: 5,
  x: 6,
  y: 7,
  z: 8,
  ' ': 0,
};

// alternative = https://gist.github.com/marcelo-ribeiro/abd651b889e4a20e0bab558a05d38d77
//https://stackoverflow.com/questions/990904/remove-accents-diacritics-in-a-string-in-javascript#answer-37511463
function removeAccents(str) {
  return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "")
}

function toLowerCase(str) {
  return str.toLowerCase();
}

function prepareString(str) {
  str = toLowerCase(str);
  str = removeAccents(str);
  return str;
}

export function letter2Number(letter) {
  return mapLetterToNumber[prepareString(letter)];
}

export function isVowel(letter) {
  letter = prepareString(letter);
  return ['a', 'e', 'i', 'o', 'u'].includes(letter);
}