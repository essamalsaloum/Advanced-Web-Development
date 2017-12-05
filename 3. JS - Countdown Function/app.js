var seconds = 3;

var interval = setInterval(function(){

    if (seconds !== 0){
      console.log(seconds);
      seconds -= 1;
    }
    else {
      console.log("Ring Ring Ring!!!");
      clearInterval(interval);
    }
},1000);
