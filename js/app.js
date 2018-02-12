window.onload = function() {
  var values = fetch("https://api.coinmarketcap.com/v1/ticker/"+coin.name+"/?convert=EUR")
                .then(function(response) { return response.json(); })
                .then(function(data) { coin = data; });
}

console.log(coin);