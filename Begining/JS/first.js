//let and const - block scoped
//var function scoped
let firstName = "Mohit"; //global scope
let address = "#23432 ...."; //global

{
	{
		{
			console.log(firstName);
		}
	}
}

function hello() {
	{
		{
			{
				var loc = "Mohali";
				console.log(firstName);
			}
		}
	}
	console.log(loc);
}
hello();
console.log(loc);
