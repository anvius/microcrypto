window.onload = function() {
  // Configuracion
  var crypto = "cardano";

  fetch(`https://api.coinmarketcap.com/v1/ticker/${crypto}/?convert=EUR`)
  .then(function(response) { return response.json()[0]; })
  .then(function(data) {
    document.title.value = data.name;
    var title = document.getElementsByTagName("h1")[0];
    title.innerHTML = data.name + "(" + data.symbol + ")";
  });
  console.log("https://api.coinmarketcap.com/v1/ticker/"+crypto+"/?convert=EUR");
}
