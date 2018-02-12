window.onload = function() {
  var values = fetch("https://api.coinmarketcap.com/v1/ticker/"+coin.crypto+"/?convert=EUR")
                .then(function(response) { return response.json(); })
                .then(function(data) { coin = Object.assign(coin, data[0]) });
}

console.log(coin);