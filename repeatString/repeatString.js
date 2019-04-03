const repeatString = function(string, times) {
  
  let repeatedString = "";
  while (times > 0){
  repeatString += string;
    times --;
  }
  return repeatedString;
}
module.exports = repeatString
