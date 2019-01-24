const ANCESTRY_FILE = [
  {"name": "Carolus Haverbeke", "sex": "m", "born": 1832, "died": 1905, "father": "Carel Haverbeke", "mother": "Maria van Brussel"},
  {"name": "Emma de Milliano", "sex": "f", "born": 1876, "died": 1956, "father": "Petrus de Milliano", "mother": "Sophia van Damme"},
  {"name": "Maria de Rycke", "sex": "f", "born": 1683, "died": 1724, "father": "Frederik de Rycke", "mother": "Laurentia van Vlaenderen"},
  {"name": "Jan van Brussel", "sex": "m", "born": 1714, "died": 1748, "father": "Jacobus van Brussel", "mother": "Joanna van Rooten"},
  {"name": "Philibert Haverbeke", "sex": "m", "born": 1907, "died": 1997, "father": "Emile Haverbeke", "mother": "Emma de Milliano"},
  {"name": "Jan Frans van Brussel", "sex": "m", "born": 1761, "died": 1833, "father": "Jacobus Bernardus van Brussel", "mother":null},
  {"name": "Pauwels van Haverbeke", "sex": "m", "born": 1535, "died": 1582, "father": "N. van Haverbeke", "mother":null},
  {"name": "Clara Aernoudts", "sex": "f", "born": 1918, "died": 2012, "father": "Henry Aernoudts", "mother": "Sidonie Coene"},
  {"name": "Emile Haverbeke", "sex": "m", "born": 1877, "died": 1968, "father": "Carolus Haverbeke", "mother": "Maria Sturm"},
  {"name": "Lieven de Causmaecker", "sex": "m", "born": 1696, "died": 1724, "father": "Carel de Causmaecker", "mother": "Joanna Claes"},
  {"name": "Pieter Haverbeke", "sex": "m", "born": 1602, "died": 1642, "father": "Lieven van Haverbeke", "mother":null},
  {"name": "Livina Haverbeke", "sex": "f", "born": 1692, "died": 1743, "father": "Daniel Haverbeke", "mother": "Joanna de Pape"},
  {"name": "Pieter Bernard Haverbeke", "sex": "m", "born": 1695, "died": 1762, "father": "Willem Haverbeke", "mother": "Petronella Wauters"},
  {"name": "Lieven van Haverbeke", "sex": "m", "born": 1570, "died": 1636, "father": "Pauwels van Haverbeke", "mother": "Lievijne Jans"},
  {"name": "Joanna de Causmaecker", "sex": "f", "born": 1762, "died": 1807, "father": "Bernardus de Causmaecker", "mother":null},
  {"name": "Willem Haverbeke", "sex": "m", "born": 1668, "died": 1731, "father": "Lieven Haverbeke", "mother": "Elisabeth Hercke"},
  {"name": "Pieter Antone Haverbeke", "sex": "m", "born": 1753, "died": 1798, "father": "Jan Francies Haverbeke", "mother": "Petronella de Decker"},
  {"name": "Maria van Brussel", "sex": "f", "born": 1801, "died": 1834, "father": "Jan Frans van Brussel", "mother": "Joanna de Causmaecker"},
  {"name": "Angela Haverbeke", "sex": "f", "born": 1728, "died": 1734, "father": "Pieter Bernard Haverbeke", "mother": "Livina de Vrieze"},
  {"name": "Elisabeth Haverbeke", "sex": "f", "born": 1711, "died": 1754, "father": "Jan Haverbeke", "mother": "Maria de Rycke"},
  {"name": "Lievijne Jans", "sex": "f", "born": 1542, "died": 1582, "father":null, "mother":null},
  {"name": "Bernardus de Causmaecker", "sex": "m", "born": 1721, "died": 1789, "father": "Lieven de Causmaecker", "mother": "Livina Haverbeke"},
  {"name": "Jacoba Lammens", "sex": "f", "born": 1699, "died": 1740, "father": "Lieven Lammens", "mother": "Livina de Vrieze"},
  {"name": "Pieter de Decker", "sex": "m", "born": 1705, "died": 1780, "father": "Joos de Decker", "mother": "Petronella van de Steene"},
  {"name": "Joanna de Pape", "sex": "f", "born": 1654, "died": 1723, "father": "Vincent de Pape", "mother": "Petronella Wauters"},
  {"name": "Daniel Haverbeke", "sex": "m", "born": 1652, "died": 1723, "father": "Lieven Haverbeke", "mother": "Elisabeth Hercke"},
  {"name": "Lieven Haverbeke", "sex": "m", "born": 1631, "died": 1676, "father": "Pieter Haverbeke", "mother": "Anna van Hecke"},
  {"name": "Martina de Pape", "sex": "f", "born": 1666, "died": 1727, "father": "Vincent de Pape", "mother": "Petronella Wauters"},
  {"name": "Jan Francies Haverbeke", "sex": "m", "born": 1725, "died": 1779, "father": "Pieter Bernard Haverbeke", "mother": "Livina de Vrieze"},
  {"name": "Maria Haverbeke", "sex": "m", "born": 1905, "died": 1997, "father": "Emile Haverbeke", "mother": "Emma de Milliano"},
  {"name": "Petronella de Decker", "sex": "f", "born": 1731, "died": 1781, "father": "Pieter de Decker", "mother": "Livina Haverbeke"},
  {"name": "Livina Sierens", "sex": "f", "born": 1761, "died": 1826, "father": "Jan Sierens", "mother": "Maria van Waes"},
  {"name": "Laurentia Haverbeke", "sex": "f", "born": 1710, "died": 1786, "father": "Jan Haverbeke", "mother": "Maria de Rycke"},
  {"name": "Carel Haverbeke", "sex": "m", "born": 1796, "died": 1837, "father": "Pieter Antone Haverbeke", "mother": "Livina Sierens"},
  {"name": "Elisabeth Hercke", "sex": "f", "born": 1632, "died": 1674, "father": "Willem Hercke", "mother": "Margriet de Brabander"},
  {"name": "Jan Haverbeke", "sex": "m", "born": 1671, "died": 1731, "father": "Lieven Haverbeke", "mother": "Elisabeth Hercke"},
  {"name": "Anna van Hecke", "sex": "f", "born": 1607, "died": 1670, "father": "Paschasius van Hecke", "mother": "Martijntken Beelaert"},
  {"name": "Maria Sturm", "sex": "f", "born": 1835, "died": 1917, "father": "Charles Sturm", "mother": "Seraphina Spelier"},
  {"name": "Jacobus Bernardus van Brussel", "sex": "m", "born": 1736, "died": 1809, "father": "Jan van Brussel", "mother": "Elisabeth Haverbeke"}
];

function createCards(object) {
  var block = document.createElement('div');
  block.style.display = 'flex';
  block.style.flexDirection = 'row';

  block.style.justifyContent = 'space-around';
  block.style.flexWrap = 'wrap';
  document.body.appendChild(block);

  for (var i = 0; i < object.length; i++) {
    var div = document.createElement('div');
    div.style.boxShadow = "5px 5px 10px rgba(0,0,0,.2)";
    div.style.borderRadius = '10px';
    div.style.backgroundColor = '#f9f1a8';
    div.style.width = '20%';
    div.style.padding = '20px';
    div.style.marginBottom = '20px';
    div.style
    block.appendChild(div);
    console.log(object[i]);

    var name = document.createElement('p');
    name.innerText = 'Name: ' + object[i].name + ';';
    name.style.textAlign = 'center';
    name.style.fontWeight = '900';
    name.style.fontSize = '22px';
    div.appendChild(name);

    var sex = document.createElement('p');
    sex.innerText = 'Sex: ' + object[i].sex + ';';
    sex.style.textAlign = 'center';
    div.appendChild(sex);

    var born = document.createElement('p');
    born.innerText = 'Born: ' + object[i].born + ';';
    born.style.textAlign = 'center';
    div.appendChild(born);

    var died = document.createElement('p');
    died.innerText = 'Died: ' + object[i].died + ';';
    died.style.textAlign = 'center';
    div.appendChild(died);

    var father = document.createElement('p');
    father.innerText = 'Father: ' + object[i].father + ';';
    father.style.textAlign = 'center';
    div.appendChild(father);

    var mother = document.createElement('p');
    mother.innerText = 'Mother: ' + object[i].mother + ';';
    mother.style.textAlign = 'center';
    div.appendChild(mother);
  }
  var summaryBlock = document.createElement('div');
  summaryBlock.style.borderRadius = '5px';
  summaryBlock.style.textAlign = 'center';
  summaryBlock.style.width = '50%';
  summaryBlock.style.padding = '40px';
  summaryBlock.style.backgroundColor = '#d9f1a9';
  summaryBlock.style.boxShadow = '5px 5px 10px rgba(0,0,0,.2)';
  div.style.borderRadius = '10px';
  block.appendChild(summaryBlock);

  var blockName = document.createElement('h2');
  blockName.innerText = "Statistics:";
  blockName.style.marginBottom = '20px';
  summaryBlock.appendChild(blockName);

  var motherAndChildren = document.createElement('p');
  motherAndChildren.innerText = 'Difference between mothers and children: ' + calculateDifference(ANCESTRY_FILE) + ' years';
  summaryBlock.appendChild(motherAndChildren);

  var middleMaleAge = document.createElement('p');
  middleMaleAge.innerText = 'Average male age: ' + calculateMiddleAge(ANCESTRY_FILE, 'm') + ' years';
  summaryBlock.appendChild(middleMaleAge);

  var middleFemaleAge = document.createElement('p');
  middleFemaleAge.innerText = 'Average female age: ' + calculateMiddleAge(ANCESTRY_FILE, 'f') + ' years';
  summaryBlock.appendChild(middleFemaleAge);
};

function calculateAge(person) {
  return person.died - person.born;
};

function calculateDifference(object) {
  var sum = 0;
  var count = 0;
  for (var i = 0; i < object.length; i++) {
    if (object[i].mother) {
      var child = object[i];
      for (var j = 0; j < object.length; j++) {
        var mother = object[j];
        if (child.mother === mother.name) {
          sum += Math.abs(calculateAge(mother) - calculateAge(child));
          count++;
        }
      }
    }
  }
  return Math.round(sum / count);
};

function calculateMiddleAge(object, sex) {
  var sum = 0;
  var count = 0;
  for (var i = 0; i < object.length; i++) {
    if (object[i].sex === sex) {
      sum += calculateAge(object[i]);
      count++;
    }
  }
  return Math.round(sum / count);
};

createCards(ANCESTRY_FILE);