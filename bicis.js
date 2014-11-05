// // Create the XHR object.
// function createCORSRequest(method, url) {
//   var xhr = new XMLHttpRequest();
//   if ("withCredentials" in xhr) {
//     // XHR for Chrome/Firefox/Opera/Safari.
//     xhr.open(method, url, true);
//   } else if (typeof XDomainRequest != "undefined") {
//     // XDomainRequest for IE.
//     xhr = new XDomainRequest();
//     xhr.open(method, url);
//   } else {
//     // CORS not supported.
//     xhr = null;
//   }
//   return xhr;
// }
//
// // Helper method to parse the title tag from the response.
// function getTitle(text) {
//   return text.match('<title>(.*)?</title>')[1];
// }
//
// // Make the actual CORS request.
// function makeCorsRequest() {
//   // All HTML5 Rocks properties support CORS.
//   var url = '//api.morph.io/utnso/funciona/data.json?key=VqRWxvYWXds%2BZDw3OHHn&query=select%20*%20from%20%27data%27';
//
//   var xhr = createCORSRequest('GET', url);
//   if (!xhr) {
//     alert('CORS not supported');
//     return;
//   }
//
//   // Response handlers.
//   xhr.onload = function() {
//     var text = xhr.responseText;
//     // var title = getTitle(text);
//     // alert('Response from CORS request to ' + url + ': ' + title);
//     document.getElementById('bicis-tabla').innerHTML = text;
//   };
//
//   // xhr.onerror = function() {
//   //   alert('Woops, there was an error making the request.');
//   // };
//
//   xhr.send();
// }
//
// makeCorsRequest();
//
// var req = new XMLHttpRequest();
// req.open('GET', 'https://api.morph.io/utnso/funciona/data.json?key=VqRWxvYWXds%2BZDw3OHHn&query=select%20*%20from%20%27data%27', false);
// req.send(null);
// if(req.status == 200) {
//   document.getElementById('bicis-tabla').innerHTML = req.responseText;
// } else {
//   alert("Error :(");
// }

// $.ajax({
//     url: 'https://api.morph.io/rubenwoudsma/profscraper1314/data.json?key=TNBd3rYa1tgWDy0ZYSux&query=select%20*%20from%20pcteamplayers%20limit%2010',
//     dataType: 'jsonp',
//     success: function(data) {
//         log('received data: ' + JSON.stringify(data, undefined, 2));
//     }
// });

$.ajax({
    url: 'https://api.morph.io/utnso/funciona/data.json?key=VqRWxvYWXds%2BZDw3OHHn&query=select%20*%20from%20%27data%27',
    dataType: 'jsonp',
    success: function(data) {
      $('#bicis-tabla').html(JSON.stringify(data, undefined, 2))
        // console.log('received data: ' + );
    }
});

// $.ajax({
//     url : "https://morph.io/utnso/funciona/data.json",
//     dataType: 'jsonp',
//     data: { 'query': "select * from 'data'", "api_key": 'VqRWxvYWXds%2BZDw3OHHn', callback: 'jason' },
//     success: function(data, textStatus, jqXHR)
//     {
//         console.log(data)
//     },
//     error: function (jqXHR, textStatus, errorThrown)
//     {
//       console.log(errorThrown)
//     }
// });
