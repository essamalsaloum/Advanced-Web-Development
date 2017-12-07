var url = 'https://ron-swanson-quotes.herokuapp.com/v2/quotes';
var axiosBtn = document.querySelector("#axios");

// When Axios Button is clicked
axiosBtn.addEventListener("click", getQuote);



//Use axios to GET and display to DOM
function getQuote(){
    axios.get(url)
    .then(displayToDOM)
    .catch(handleError)
}


// create display to DOM from reply of url
function displayToDOM(data){
  document.querySelector("#quote").innerHTML = data.data[0];
}


// handle errors from axios Request
function handleError(req){
  if(req.response){
    console.log("Problem with Response", req.response.status)
  } else if (req.request){
    console.log("Problem with Request");
  } else{
    console.log('Error ', req.message);
  }
}
