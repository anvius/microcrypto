window.onload = function() {
  var values = fetch("https://api.coinmarketcap.com/v1/ticker/"+coin.crypto+"/?convert=EUR")
                .then(function(response) { return response.json(); })
                .then(function(data) { coin = Object.assign(coin, data[0]) });
}

document.title = coin.name;
var title = document.getElementsByTagName("h1");
title.value = coin.name + "(" + coin.symbol + ")";