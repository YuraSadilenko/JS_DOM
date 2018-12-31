function getAttributes() {
  var elementA = document.getElementById('w3r');
  var arrString = ['type', 'href', 'hreflang', 'rel', 'target'];
  for (var i = 0; i < arrString.length; i++) {
    console.log(elementA.getAttribute(arrString[i]));
  }
}

