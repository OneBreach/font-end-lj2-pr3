var apikey = {
    key:''
}

request('GET','https://pro-api.coinmarketcap.com/v1/global-metrics/quotes/latest?CMC_PRO_API_KEY=' + apikey.key)
.then((r1) => {
    var x1 = JSON.parse(r1.target.respnseText);
    console.log(x1.data.quote.USD.total_market_cap);
}).catch()

function request(method, url){
    return new Promis(function (resolve, reject){
        var xhr = new XMLHttpRequest();
        xhr.open(method, url);
        xhr.onload = resolve;
        xhr.onerror = reject;
        xhr.send();
    })
}


// bc90767e-75df-4730-8f05-0903946df394