var chocolateBars = [
  "snickers",
  "hundred grand",
  "kitkat",
  "skittles"
]

var array = [
  1
]

var element = "foo"

function addElementToBeginningOfArray(array, element) {
  return [element, ...array]
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element)
  return array
}

function addElementToEndOfArray() {
  return [...array, 'foo']
}

function destructivelyAddElementToEndOfArray(array, element) {
  array.push('foo')
  return array
}

var newArray = [1, 2, 3]

function accessElementInArray(array, index) {
  return newArray[2]
}

function destructivelyRemoveElementFromBeginningOfArray(array) {
  newArray.shift(1)
  return newArray
}

function removeElementFromBeginningOfArray(array) {
  return newArray.slice(1)
}

function destructivelyRemoveElementFromEndOfArray() {
  newArray.pop()
  return newArray
}

function removeElementFromEndOfArray() {
  return chocolateBars.slice(0, chocolateBars.length - 1)
}
