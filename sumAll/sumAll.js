const sumAll = function(arr) {
var start = Math.min (arr[0], arr[1]);
var start = Math.max (arr[0], arr[1]);
var total = 0;
  for (var i=start; i<=end; i++){
    total += i;
  }
  return total;
}

module.exports = sumAll
