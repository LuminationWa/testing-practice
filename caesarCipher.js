function caesarCipher(string, shift) {
  if (!shift) return string;
  const alphabet = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  let array = string.split("");
  let newArray = [];
  array.forEach((element) => {
    let alphabetIndex = alphabet.indexOf(element.toUpperCase());
    if (!alphabet.includes(element.toUpperCase())) {
      newArray.push(element);
    } else if (alphabetIndex + shift > 23 && alphabetIndex != -1) {
      let extra = alphabetIndex + shift - 23;
      element === element.toUpperCase()
        ? newArray.push(alphabet[extra - 3])
        : newArray.push(alphabet[extra - 3].toLowerCase());
    } else
      element === element.toUpperCase()
        ? newArray.push(alphabet[alphabetIndex + shift])
        : newArray.push(alphabet[alphabetIndex + shift].toLowerCase());
  });
  return newArray.join("");
}

module.exports = caesarCipher;
