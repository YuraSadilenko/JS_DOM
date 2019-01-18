function createCloneNode(block) {
  var parent = document.getElementById(block);
  var placeholder = document.getElementById('clone');
  var clone = parent.cloneNode(true);
  placeholder.appendChild(clone);
}

createCloneNode('w3r');
createCloneNode('table');