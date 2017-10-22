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
  var array = ["1"]
  var element = 'foo'
  array.unshift(element)
  console.log(addElementToBeginningOfArray(array, element))
}

function destructivelyAddElementToBeginningOfArray() {
  var array = [1]
  array.unshift("foo")
  console.log(destructivelyAddElementToBeginningOfArray())
}

function addElementToEndOfArray() {
  return [array, 'foo']
}

function destructivelyAddElementToEndOfArray() {
  return chocolateBars.push('pay day') + "foo"
}

function accessElementInArray() {
  return chocolateBars[1]
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
