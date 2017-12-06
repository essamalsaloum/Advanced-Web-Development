var btn = document.querySelector("#btn");
var avatar = document.querySelector("#avatar");
var fullname = document.querySelector("#fullname");
var username = document.querySelector("#username");
var email = document.querySelector("#email");
var city = document.querySelector("#city");


var url = "https://randomuser.me/api";

//add an even listener
btn.addEventListener("click", function() {
//Start promise chaining
fetch(url)
    .then(errorCheck)
    .then(parseJson)
    .then(displayInfo)
    .catch(error)
});



// Functions for Promises

// function to check for errors
function errorCheck(req) {
    if(!req.ok){
        throw Error(req.status);
    }
    return req;
}

// function to parse data to json and return first value
function parseJson (res){
    return res.json().then(function(data){
        return data.results[0];
    })
}

// Function to display information to the user
function displayInfo(person){
    fullname.innerHTML = person.name.first + person.name.last;
    username.innerHTML = person.login.username;
    email.innerHTML = person.email;
    city.innerHTML = person.location.city;
    avatar.src = person.picture.medium;
}

//what to do on error
function error(err){
    console.log(err);
}