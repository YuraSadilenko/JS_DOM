function replaceElementBy(blockCurrent, blockToReplace) {
  var block = document.getElementById(blockCurrent);
  var newBlock = document.createElement(blockToReplace);
  block.parentNode.replaceChild(newBlock, block);
  newBlock.classList.add('div-block');
  newBlock.innerHTML = 'new block';
}