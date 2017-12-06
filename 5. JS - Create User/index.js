var btn = document.querySelector("#btn");
var avatar = document.querySelector("#avatar");
var fullname = document.querySelector("#fullname");
var username = document.querySelector("#username");
var email = document.querySelector("#email");
var city = document.querySelector("#city");



var url = "https://randomuser.me/api";

btn.addEventListener("click", function() {
  fetch(url)
    .then(function(req){
      if(!req.ok){
        throw Error(req.status);
      }
      return req;
    })
    .then(function(data){
      return data.json();
    })
    .then(function(jsonData){
      console.log(jsonData.results.email);
    })
    .catch(function(err){
      console.log(err);
    })

});
