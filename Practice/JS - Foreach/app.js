// impliment own foreach method


var test = [1,2,3];

function forEach(array, callback){
  for (var i = 0; i < array.length; i++) {
    callback(array[i], i, array);
  }
}

function halfValues(arr){
  var newArr = [];
  forEach(arr, function(val){
    newArr.push(val/2);
  })
  return newArr;
}

console.log(halfValues(test));
