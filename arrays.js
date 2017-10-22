var chocolateBars = [
  "snickers",
  "hundred grand",
  "kitkat",
  "skittles"
]

var array = [
  1
]

function addElementToBeginningOfArray(array, element) {
  return ['foo', ...array]
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift('foo')
}

function addElementToEndOfArray() {
  return [...array, 'foo']
}

function destructivelyAddElementToEndOfArray(array, element) {
  array.push('foo')
}

function accessElementInArray(array, index) {
  var newArray = [3, 2, 1]
  return newArray[1]
}

function destructivelyRemoveElementFromBeginningOfArray() {
  return chocolateBars.shift
}

function removeElementFromBeginningOfArray() {
  return chocolateBars.slice(1)
}

function destructivelyRemoveElementFromEndOfArray() {
  return chocolateBars.pop()
}

function removeElementFromEndOfArray() {
  return chocolateBars.slice(0, chocolateBars.length - 1)
}
