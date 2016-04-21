
function outputValue(val) {
  document.querySelector('#rangeOutput').value = val;
  var amount = document.getElementById('rangeBar').value;
  document.getElementById('numberBox').value = amount;
}

function boxValueAmount(val) {
  var amount = document.getElementById('numberBox').value = val;
  document.getElementById('rangeBar').value = amount;
  document.querySelector('#rangeOutput').value = amount;
}
