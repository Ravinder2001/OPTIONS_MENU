/** @format */

const readline = require('readline');
const readline1 = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});
let books = [];
function ravi() {
	readline1.question(
		'Press 1 - Show all books Press 2 - Add a new book Press 3 - Quit',
		function (option) {
			if (option == 1) {
				console.log(books);
				ravi();
			}

			if (option == 2) {
				readline1.question('Please add a new book', function (name) {
					books.push(name);
					console.log(`${name} Added Successfully`);

					ravi();
				});
			}
			if (option == 3) {
				readline1.question(
					'Are you sure you want to quit - press Y to quit',
					function (name) {
						if (name == 'Y') {
							readline1.close();
						}
					}
				);
			}
			if (option != 1 && option != 2 && option != 3) {
				console.log(
					'You have selected an invalid entry so please press 1, 2 or 3'
				);
				ravi();
			}
		}
	);
}
readline1.on('close', function () {
	console.log('Bye Bye');
});
ravi();
