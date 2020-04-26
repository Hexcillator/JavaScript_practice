//uncomment accordingly to show results in console

var myArray1=[['hello','bye','morning'],'house',1,2020,['give','run','play'], 2,['javascrip','css','html']];
//console.log(myArray1);

//The push() method will add an element to the end of the myArray
myArray1.push([['array',['nested array',0],1,3],1,2,3,4]);
//console.log(myArray1[myArray1.length-1]);

//The pop() method in contrast will remove the last element of our array
myArray1.pop();
//console.log(myArray1);

//The unshift() method adds an element at the begining of the myArray

myArray1.unshift('This has been added at the begining of the array');
//console.log(myArray1);


//on the other hand shift() removes the first element of the myArray
myArray1.shift();
//console.log(myArray1);

//we can use concat() to join two of more arrays
var myArray2=['array2 element1','array2 element2'];
var myArray3=['array3 element1','array3 element2'];
var myArray4=myArray2.concat(myArray3);
//console.log(myArray4);

//when we have a array we can display its constructor using constructor

console.log(myArray1.constructor);
