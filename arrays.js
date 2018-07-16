var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles" ]

function addElementToEndOfArray(array, element) {
  array.push(element);
  return array;
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element);
  return array;
}
