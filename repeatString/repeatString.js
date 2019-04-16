const repeatString = function(str, num) {
var finalValue = "";
  if (num < 0) return "ERROR";
  for (var i=0; i<num; i++){
  finalValue += str;
  }
  return finalValue;
}

module.exports = repeatString
