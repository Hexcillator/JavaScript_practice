//The following function adds and element at the end of an array and removes the first element and returns this element


function myArray(array,item){
  array.push(item);
  var firstRemovedItem=array.shift();
  return firstRemovedItem;
}

var anArray = [1,2,3,4,5,6];
console.log(myArray(anArray,10));
console.log(anArray);
