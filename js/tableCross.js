var table = document.getElementById('table').children[0];

for (var i = 0; i < table.rows.length; i++) {
  var row = table.rows[i];
  row.cells[i].style.backgroundColor = 'red';
}
