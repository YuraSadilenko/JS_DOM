var colorsArray = [
  "#00ffff", "#f0ff0f", "#f5f5dc", "#000000", "#0000ff"];

function randomLetterColor() {
  var arr = colorsArray;
  var element = document.getElementById('random-color');
  var string = element.innerText;
  var symbol = string.split('');
  element.innerHTML = '';
  var prevColor = '';

  for (var i = 0; i < symbol.length; i++) {
    var res = symbol[i];
    var span = document.createElement('span');
    var randomColor = arr[getRandomInteger(0, arr.length - 1)];

    while (prevColor === randomColor) {
      randomColor = arr[getRandomInteger(0, arr.length - 1)];
    }

    prevColor = randomColor;
    span.className = 'colorfull-span';
    span.innerHTML = res;
    span.style.color = randomColor;
    element.appendChild(span);
  }
}

function getRandomInteger(min, max) {
  return Math.round(Math.random() * (max - min)) + min;
}


