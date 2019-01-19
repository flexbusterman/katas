// Trying to solve a problem that I encountered myself. Please suggest improvements : )
// The result should be an array of pages that contains big, wide, and small images according to following formula:
// 2 big pictures, maximum 8 small pictures, and maximum one wide image
// if the page contains one wide image it should contain 6 small, otherwise it should contain 7 small pictures
// the first two and last two pictures in the array should not be big

// get semi random amount of test pictures 

// custom randomize array function
function shuffle (array) {
	var currentIndex = array.length, temporaryValue, randomIndex;

	// While there remain elements to shuffle...
	while (0 !== currentIndex) {

		// Pick a remaining element...
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex -= 1;

		// And swap it with the current element.
		temporaryValue = array[currentIndex];
		array[currentIndex] = array[randomIndex];
		array[randomIndex] = temporaryValue;
	}
	return array;
}

let payload = {
	big: [],
	small: [],
	wide: [],
}

let amountBig = (5 + Math.floor(Math.random() * 5) * 3)
let amountSmall = (20 + Math.floor(Math.random() * 10) * 3)
let amountWide = (4 + Math.floor(Math.random() * 2) * 3)

for (let i = 0; i < amountBig; i++) {
	payload.big.push(
		{
			url: 'https://picsum.photos/600/848/?image=' + Math.floor(Math.random() * 100),
			type: 'big'
		}
	)
	// payload.big.push('https://source.unsplash.com/collection/' + Math.floor(Math.random() * 100000 + '/600x848'))
}
// Set small urls
for (let i = 0; i < amountSmall; i++) {
	payload.small.push(
		{
			url: 'https://picsum.photos/300/424/?image=' + Math.floor(Math.random() * 300),
			type: 'small'
		}
	)
	// payload.big.push('https://source.unsplash.com/collection/' + Math.floor(Math.random() * 100000 + '/600x848'))
}
for (let i = 0; i < amountWide; i++) {
	payload.wide.push(
		{
			url: 'https://picsum.photos/600/424/?image=' + Math.floor(Math.random() * 300),
			type: 'wide'
		}
	)
	// payload.big.push('https://source.unsplash.com/collection/' + Math.floor(Math.random() * 100000 + '/600x848'))
}

let remaining = payload

// variable that store the pages
let pages = []

while (remaining.big.length >= 2 && remaining.small.length >= 6){
	let page = []

	for (let i = 0; i < 2 && remaining.big.length > 0; i++) {
		page.push(remaining.big.shift())
	}

	// 75% chance to add wide image

	if (Math.random() < 0.75 && remaining.wide.length > 0) {
		page.push(remaining.wide.shift())

		// if wide is added then add 6 small
		for (let i = 0; i < 8 && remaining.small.length > 0; i++) {
			page.push(remaining.small.shift())
		}
	} else {
		// if no wide is added, add 7 small
		for (let i = 0; i < 9 && remaining.small.length > 0; i++) {
			page.push(remaining.small.shift())
		}
	}

	shuffle(page)
	
	// TODO: scramble and check that last 2(?) images isn't big
	while (page[page.length-1].type != 'big') {
		// console.log("reshuffle array")
		shuffle(page)
	}


	pages.push(page)
}

let lastPage = []

for (let i = 0; i < remaining.small.length; i++) {
	lastPage.push(remaining.small.shift())
}

for (let i = 0; i < remaining.big.length; i++) {
	lastPage.push(remaining.big.shift())
}

for (let i = 0; i < remaining.wide.length; i++) {
	lastPage.push(remaining.wide.shift())
}

console.log(lastPage.filter(item => item.type == 'big').length > 2)


if (lastPage.filter(item => item.type == 'big').length > 2){
	let bigCount = 0
	for (let i = 0; i < lastPage.length; i++) {
		if (lastPage[i].type == 'big') {
			bigCount++
			if (bigCount > 2) {
				bigCount--
				lastPage[i].type = 'small'
			}
		}
	}
}

pages.push(lastPage)

