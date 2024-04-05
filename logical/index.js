/**
 * @param {number}
 * @return {boolean}
 */

const isPalindrome = (number) => {
  let string = number.toString();
  let string2 = "";

  for (let i = string.length - 1; i >= 0; i--) {
    string2 += string[i];
  }

  return string2 == string;
};
