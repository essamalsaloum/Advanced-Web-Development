var btn = document.querySelector("#btn");
var span = document.querySelector("#price");

//listen for clicks
btn.addEventListener("click", function(){
    //make the request

    var XHR = new XMLHttpRequest();

    XHR.onreadystatechange = function () {
        if(XHR.readyState == 4 && XHR.status == 200) {
            var value = JSON.parse(XHR.responseText);
            span.innerHTML = value.bpi.EUR.rate + " EUR";
        }
    };

    XHR.open("GET", "https://api.coindesk.com/v1/bpi/currentprice.json");
    XHR.send();

});