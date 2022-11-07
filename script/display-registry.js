var _tr_ = document.createElement('tr'),
_td_ = document.createElement('td');

function buildHtmlTable(id, arr) {
  var tbody = document.getElementById(id).querySelector("tbody");
  for (var i = 0; i < arr.length;++ i) {
    var tr = _tr_.cloneNode(false);
    var td = _td_.cloneNode(false);
    
    var img = document.createElement('img');
    img.setAttribute("src", "reference-images/" + arr[i]["bciav"] + ".svg");
    img.setAttribute("alt", "symbol of the " + arr[i]["english"]);
    img.setAttribute("loading", "lazy");
    img.setAttribute("class", "reference-image");
    
    td.appendChild(img);
    tr.appendChild(td);
    
    td = _td_.cloneNode(false);
    td.appendChild(document.createTextNode(arr[i]["bciav"] || ''));
    tr.appendChild(td);

    td = _td_.cloneNode(false);
    td.appendChild(document.createTextNode(arr[i]["english"] || ''));
    tr.appendChild(td);

 /*   td = _td_.cloneNode(false);
    td.appendChild(document.createTextNode(arr[i]["derivationExplanation"] || ''));
    tr.appendChild(td);*/

    tbody.appendChild(tr);
  }
  return tbody;
}

function fillTable(id, uri) {
  fetch(uri).then(response => {
    return response.json();
  }).then(data => buildHtmlTable(id, data));
}