var result = "";
function repeatString(string, num) {
  if (num < 0) {
    return "ERROR";
  }
  for (let i = 0; i < num; i++) {
    result += string;
  }
  return result
};
// console.log(repeatString("hey", 10));
// Do not edit below this line
module.exports = repeatString;
