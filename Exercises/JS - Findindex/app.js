var arr = [3,4,6,2,1];

console.log("number is equal to 6");
arr.findIndex(function(num, index, array){
  console.log(num);
  return console.log(num === 6);
});

console.log("number is divisable by 2");
arr.findIndex(function(num,index,array){
  console.log(num)
  return console.log(num % 2 === 0);
});
