const assertEquals = (a,b) => a == b

const repeatStr = (num, str) => {
	let result = ''
	for(i=0; i<num; i++){
		result += str
	}
	return result
}

console.log(assertEquals(repeatStr(3, "*"), "***"))
console.log(assertEquals(repeatStr(5, "#"), "#####"))
console.log(assertEquals(repeatStr(2, "ha "), "ha ha "))