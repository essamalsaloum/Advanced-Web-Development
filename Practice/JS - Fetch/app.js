var url = "https://api.coindesk.com/v1/bpi/currentprice.json";

fetch(url)
.then(function(request){
  console.log(request);
})

//return a json
fetch(url)
.then(function(response){
  return response.json();
})
.then(function(data){
  console.log(data);
})


//with options
fetch(url, {
  method: 'POST',
  body: JSON.stringify({
    name: 'blue',
    login: 'bluecat'
  })
})
.then(function(response){
  return response.json();
})
.then(function(data){
  console.log(data);
})

//handle errors
fetch(url)
.then(function(req){
  if(!req.ok){
    throw Error(404);
  }
  return req;
}).then(function(response){
  console.log(response);
}).catch(function(error){
  console.log(error);
})
