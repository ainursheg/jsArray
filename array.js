const myAwesomeArray = ["a", "b", "c", "d", "e"]

myAwesomeArray.some(test => test === "d")
//-------> Output : true

const myAwesomeArray = [1, 2, 3, 4, 5]

myAwesomeArray.reduce((total, value) => total * value)
// 1 * 2 * 3 * 4 * 5
//-------> Output = 120

const myAwesomeArray = ["a", "b", "c", "d", "e"]

myAwesomeArray.every(test => test === "d")
//-------> Output : false

const myAwesomeArray2 = ["a", "a", "a", "a", "a"]

myAwesomeArray2.every(test => test === "a")
//-------> Output : true
