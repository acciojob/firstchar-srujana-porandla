function firstChar(text) {
  // your code here
	let trimmedt=text.trim();
	return trimmedt.charAt(0);
}

// Do not change the code below

const text = prompt("Enter text:");
alert(firstChar(text));
