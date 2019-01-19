const assertEquals = (a, b) => a == b

// const highAndLow = (string) => {
// 	let numbers = string.split(' ').map(word => parseInt(word, 10))
// 	let high = 0
// 	let low = 0

// 	for (let i = 0; i < numbers.length; i++) {
// 		if (numbers[i] > high) {
// 			console.log(numbers[i])
// 			high = numbers[i]
// 		}	
// 		if (numbers[i] < low) {
// 			low = numbers[i]
// 		}
// 	}
// 	return high + " " + low
// }

const highAndLow = (string) => {
	let numbers = string.split(' ').map(word => parseInt(word, 10))
	let high = numbers.reduce((high, num) => num >= high ? num : high, numbers[0])
	let low = numbers.reduce((low, num) => num <= low ? num : low, numbers[0])
	return [high, low].join(' ')
}


console.log("500" > "-12310")
console.log(highAndLow("4 5 29 54 4 0 -214 542 -64 1 -3 6 -6"))
assertEquals(highAndLow("4 5 29 54 4 0 -214 542 -64 1 -3 6 -6"), "542 -214")