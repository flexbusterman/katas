function positiveSum (arr) {
	return arr.filter(num => num > 0).reduce((item, sum) => sum += item, sum = 0);
}


console.log(positiveSum([1, 2, 3, 4, 5]))
console.log(positiveSum([1, -2, 3, 4, 5]))
console.log(positiveSum([]))
console.log(positiveSum([-1, -2, -3, -4, -5]))
console.log(positiveSum([-1, 2, 3, 4, -5]))