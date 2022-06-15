function caesarCipher(string, shift) {
    if (!shift) return string;
    const alphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
    let array = string.split("");
    array.forEach(element => {
        const indexOfElement = array.indexOf(element);
        const alphabetIndex = alphabet.indexOf(element.toUpperCase());
        if (alphabetIndex + shift > 23) {
          let extra = (alphabetIndex + shift) - 23;
          element === element.toUpperCase() ? array[indexOfElement] = alphabet[extra - 3] : array[indexOfElement] = alphabet[extra - 3].toLowerCase();  
        } else element === element.toUpperCase() ? array[indexOfElement] = alphabet[alphabetIndex + shift] : array[indexOfElement] = alphabet[alphabetIndex + shift].toLowerCase();      
    });
    return array.join('');
}

module.exports = caesarCipher;