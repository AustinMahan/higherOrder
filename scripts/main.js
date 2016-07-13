// console.log("hello")
console.log(any([9,10,4,11,0],isGreaterThan10));
console.log(suprise('Hi')('!'));
console.log(filter([1,2,3,4,5],isOdd));
console.log(sumTwoNumbers(6)(15));















function sumTwoNumbers(num1){
  return function(num2){
    return num1+num2
  }
}

function isOdd(num){
  if(num%2=== 1){
    return num
  }else{
    return
  }
}

function filter(array,callBack){
  var newArr = []
  for(var i=0;i<array.length;i++){
    if(callBack(array[i]) != undefined){
      newArr.push(array[i])

    }
  }
  return newArr
}


function suprise(word){
  return function(punctuation){
    return word+punctuation
  }
}


function any(array,callBack){
  var isTrue = false
  for(var i = 0; i<array.length; i++){
    isTrue = callBack(array[i])
    if(isTrue===true){
      return true
    }
  }
  return false
}

function isGreaterThan10(num){
  if(num>10){
    return true
  }
}



//
// var strLength = function(str){
//   return [str, str.length]
// }
//
// function printStrLength(strLengthArr){
//   console.log('The phrase ' + strLengthArr[0] + ' is ' + strLengthArr[1] + ' charactors long.');
// }
//
// printStrLength(strLength('tacos'))
//
//
//
//
// function listIt (items) {
//   return items[0] + ': ' + items[1];
// }
//
// var listItems = [
//   [ 1, 'Zarya' ],
//   [ 2, 'Mei' ],
//   [ 3, 'Mercy' ],
// ];
//
// function things(lists){
//   var output = [];
//   for(var i = 0; i<lists.length;i++){
//     output.push(listIt(lists[i]))
//   }
//   return output
// }
//
// function allTheThings (items, listItFn) {
//   var result = [];
//   for (var i = 0; i < items.length; i++) {
//     var formattedAsList = listItFn(items[i]);
//     result.push(formattedAsList);
//   }
//   return result;
// }
//
// console.log(things(listItems));
// console.log(allTheThings(listItems,listIt));
//
//
//
//
//
// var myArray = [10, 20, 30];
//
// function map (array, callbackFn) {
//   var result = [];
//   for (var i = 0; i < array.length; i++) {
//     var item = callbackFn(array[i]);
//     result.push(item);
//   }
//
//   return result;
// }
//
// function addOne(num){
//   return num + 1
// }
//
//
// console.log(map(myArray,addOne));
//
//
//
//
// function sum(num1,num2){
//   return num1+num2
// }
// sum(5,7)
