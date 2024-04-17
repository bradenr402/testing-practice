export default function reverseString(str) {
  let reversedStr = '';

  const splitStr = str.split('');

  for (let i = splitStr.length - 1; i >= 0; i--) {
    reversedStr += splitStr[i];
  }

  return reversedStr;
}
