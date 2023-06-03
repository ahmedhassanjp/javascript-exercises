var newArr = [];
function reverseString(string) {
  let arrayedString = string.split("")
  for (let i = 0; i < arrayedString.length; i++) {
    newArr.unshift(arrayedString[i]);
  }
  return newArr.join("");
};

// Do not edit below this line
module.exports = reverseString;
