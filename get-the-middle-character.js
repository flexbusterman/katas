const assertEquals = (a, b) => a == b

// const getMiddle = string => string.map()

function getMiddle(string){
	let result = ''
	let stringArray = string.split('')
	let middle = Math.floor(stringArray.length / 2)
	
	if (stringArray.length % 2 == 0) {
		result = stringArray[middle-1] + stringArray[middle] 
	} else {
		result = stringArray[middle]
	}
	return result
}


console.log(assertEquals(getMiddle("test"), "es"))
console.log(assertEquals(getMiddle("testing"), "t"))
console.log(assertEquals(getMiddle("middle"), "dd"))
console.log(assertEquals(getMiddle("A"), "A"))