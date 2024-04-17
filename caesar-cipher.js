export default function caesarCipher(str, shift) {
  shift = shift % 26; // ensure shift is within range 0-25
  let shiftedStr = '';

  for (let i = 0; i < str.length; i++) {
    let char = str[i];

    // check if character is a letter
    if (/[a-zA-Z]/.test(char)) {
      let charCode = str.charCodeAt(i);
      let isUpperCase = char === char.toUpperCase();

      charCode += shift;

      if ((isUpperCase && charCode > 90) || (!isUpperCase && charCode > 122))
        charCode -= 26; // wraps z and Z

      if ((isUpperCase && charCode < 65) || (!isUpperCase && charCode < 97))
        charCode += 26; // wraps a and A

      shiftedStr += String.fromCharCode(charCode);
    } else {
      // preserve non-alphabetic characters
      shiftedStr += char;
    }
  }

  return shiftedStr;
}
