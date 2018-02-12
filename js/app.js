window.onload = function() {
  var values = fetch("https://api.coinmarketcap.com/v1/ticker/"+coin.crypto+"/?convert=EUR")
                .then(function(response) { return response.json(); })
                .then(function(data) { coin = Object.assign(coin, data[0]) });
}

document.title.value = coin.name;
var title = document.getElementsByTagName("h1")[0];
title.innerHTML = coin.name + "(" + coin.symbol + ")";
console.log(coin);