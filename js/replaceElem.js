function replaceElementBy(blockCurrent, blockToReplace) {
  var parent = document.getElementById('replace-block');
  blockCurrent = parent.getElementsByTagName('span');
  var div = document.createElement('div');
  if (blockCurrent) {
    parent.removeChild('span');
    div.className = 'new_div';
  }
}