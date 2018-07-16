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

function accessElementInArray(array, index) {
  return array[index]; // accesses the element in array at the given index
}

function destructivelyRemoveElementFromBeginningOfArray(array) {
  array.shift(); // returns the array with the first element removed by mutating/altering the original
  return array;
}

function removeElementFromBeginningOfArray(array) {
  array.slice(1); // returns the array with the first element removed without mutating/altering the original
  return array;
}