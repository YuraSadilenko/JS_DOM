var colorsArray = [
  "#00ffff", "#f0ffff", "#f5f5dc", "#000000", "#0000ff", "#a52a2a", "#00ffff", "#00008b", "#008b8b",
  "#a9a9a9", "#006400", "#bdb76b", "#8b008b", "#556b2f", "#ff8c00", "#9932cc", "#8b0000", "#e9967a", 
  "#9400d3", "#ff00ff", "#ffd700", "#008000", "#4b0082", "#f0e68c", "#add8e6", "#e0ffff", "#90ee90", 
  "#d3d3d3", "#ffb6c1", "#ffffe0", "#00ff00", "#ff00ff", "#800000", "#000080", "#808000", "#ffa500", 
  "#ffc0cb", "#800080", "#ff0000", "#c0c0c0", "#ffffff", "#ffff00"];

function randomLetter() {
  var arr = colorsArray;
  var element = document.getElementById('random-color');
  var string = element.innerText;
  var symbol = string.split('');
  element.innerHTML = '';
  for (var i = 0; i < arr.length; i++) {
    var colors = arr[i];
    Math.round(Math.random() * (colors.length - 1));
  };

  for (var i = 0; i < symbol.length; i++) {
    var res = symbol[i];
    var span = document.createElement('span');

    span.className = 'colorfull-span';
    span.innerHTML = res;
    span.style.color = colors;
    element.appendChild(span);
  }
}

randomLetter();

