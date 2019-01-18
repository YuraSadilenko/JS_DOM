function createSpanInBlockByID(blockId) {
  var block = document.getElementById(blockId);
  var isSpan = block.getElementsByTagName('span');

  if (isSpan.length === 0) {
    var newSpan = document.createElement('span');
    newSpan.className = 'span-item';
    newSpan.innerHTML = 'Hello there! I\'m a new span element!';
    block.appendChild(newSpan);
  } else {
    console.log('A span element is already exists!');
  }
}




