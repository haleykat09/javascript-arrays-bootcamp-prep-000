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

var newArray = [3, 2, 1]

function accessElementInArray(array, index) {
  return newArray[0]
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
