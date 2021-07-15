//CRUD - CREATE READ UPDATE DELETE

//CREATE
let bag = ["Pen", "Pencil", true, 324];

//insertion in the array
//beiginning ushift()
//end push()
//middle

//deletion in the array
//beginning shift()
//middle splice()
//pop()

//for of
//forEach

// for (let i of bag) {
// 	console.log(i);
// }

bag.forEach((i) => console.log(i));

let numbers = [8, 3, 2, 43, 45, 2222, 4, 19999, 0];

let mapped = numbers.map((x) => x * 2);

let filtered = numbers.filter((x) => x % 3 === 0 && x % 5 === 0);

numbers.sort(function (i, j) {
	if (i > j) return -1;
	if (i < j) return 1;
	return 0;
});

let alpha = ["f", "A", "Z", "a", "c", "z"];

alpha.sort(function (a, b) {
	a = a.toUpperCase();
	b = b.toUpperCase();

	if (a > b) return 1;
	if (a < b) return -1;
	return 0;
});
