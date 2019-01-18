function addChildrenTo(blockId, count, type) {
  var parent = document.getElementById(blockId);
  var t = document.createElement(type);
  for (var i = 0; i < count; i++) {
    var clone = t.cloneNode(true);
    parent.appendChild(clone);
  }
}

addChildrenTo('add-child', 10, 'span');
