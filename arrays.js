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

function destructivelyRemoveElementFromBeginningOfArray() {
newArray.shift()
return newArray
}

function removeElementFromBeginningOfArray() {
  return newArray.slice(1)
}

function destructivelyRemoveElementFromEndOfArray() {
  return chocolateBars.pop()
}

function removeElementFromEndOfArray() {
  return chocolateBars.slice(0, chocolateBars.length - 1)
}
