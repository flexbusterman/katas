const assertEquals = (a, b) => a == b

// const getCount = string => string.split('').filter(char => 'aeiou'.split('').indexOf(char) == null)

// function getCount(string){
// 	let vowels = {
// 		a: true,
// 		e: true,
// 		i: true,
// 		o: true,
// 		u: true
// 	}
// 	let count = 0
// 	for (let i = 0; i < string.length; i++) {
// 		if (vowels[string[i]]) {
// 			count++
// 		}
// 	}
// 	return count
// }

// function getCount(string){
// 	let vowels = {
// 		a: true,
// 		e: true,
// 		i: true,
// 		o: true,
// 		u: true
// 	}
// 	return string.split('').filter(char => vowels[char]).length
// }

// console.log(['1','2','3'].includes('3'))

const getCount = (string) => string.split('').filter(char => 'aeiou'.split('').includes(char)).length

console.log(assertEquals(getCount("abracadabra"), 5))