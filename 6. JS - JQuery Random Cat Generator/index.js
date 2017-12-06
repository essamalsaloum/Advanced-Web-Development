var btn = $('#btn');
var url = "https://random.cat/meow";

// Load the initial image
$(document).ready(populateImage);


// Load image on button click
btn.click(populateImage);


//Jquery Get Function for picture and populating DOM
function populateImage(){
    $.get(url)
        .done(addCat)
        .fail(error);
}


// Function to add cat
function addCat(catUrl){
     $('#image').attr('src',catUrl.file)
}

// function to output error
function error(err){
    console.log(err);
}