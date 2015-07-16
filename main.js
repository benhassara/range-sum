function range(start, end) {
  var out = [];
  for (var i = start; i <= end; i++) {
    out.push(i);
  }
  return out;
}

function sum(array) {
  var total = 0;
  for (var i = 0; i < array.length; i++) {
    total += array[i];
  }
  return total;
}
