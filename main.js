function range(start, end, step) {
  var out = [];
  if (step === undefined)
    step = 1;
  for (var i = start; i <= end; i += step) {
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
