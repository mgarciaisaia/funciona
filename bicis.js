$.ajax({
    url: 'http://bitest-mgarciaisaia.rhcloud.com/bicis.json',
    datatype: 'jsonp',
    success: function(data) {
      document.getElementById('bicis-tabla').innerHTML = "";
      var theTable = document.createElement('table');
      document.getElementById('bicis-tabla').appendChild(theTable);
      for(index in data) {
        var estacion = data[index];
        var theRow = document.createElement('tr');
        theTable.appendChild(theRow);
        var theTd = document.createElement('td');
        theTd.textContent = estacion['name'];
        theRow.appendChild(theTd);
        theTd = document.createElement('td');
        theTd.textContent = estacion['available'];
        theRow.appendChild(theTd);

      }
      // $('#bicis-tabla').html(JSON.stringify(data, undefined, 2))
        // console.log('received data: ' + );
    }
});
