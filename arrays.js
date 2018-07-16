var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles" ];

function addElementToBeginningOfArray(array, element) {
  var newArray = [element, ...array]; // adds to beginning of array without mutating/altering the original
  return newArray;
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element); // adds to beginning of array by mutating/altering the original
  return array;
}

function addElementToEndOfArray(array, element) {
  var newArray = [...array, element]; // adds to end of array without mutating/altering the original
  return newArray;
}

function destructivelyAddElementToEndOfArray(array, element) {
  array.push(element); // adds to end of array by mutating/altering the original
  return array;
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element); // adds to beginning of array by mutating/altering the original
  return array;
}