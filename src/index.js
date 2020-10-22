module.exports = function reverse (n) {
	let number = String(Math.abs(n));
	let revNumber = number.split("").reverse().join("");
 	return revNumber;  
}
