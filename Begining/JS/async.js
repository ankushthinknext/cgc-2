console.log("first");

function getUser() {
	return new Promise((res, rej) => {
		setTimeout(() => {
			res({ id: 1, name: "abc" });
			// rej(new Error("Server down"));
		}, 3000);
	});
}
let user = null;

// getUser()
// 	.then((i) => (user = i))
// 	.catch((err) => console.log(err));

// async function getDetails() {
// 	let user = await getUser();
// 	console.log(user);
// }
// getDetails();

// fetch("https://60af92835b8c300017ded26f.mockapi.io/users")
// 	.then((data) => data)
//     .then((data) => console.log(data.json()));

async function getThirdPartyData() {
	let data = await fetch("https://60af92835b8c300017ded26f.mockapi.io/users");
	data = await data.json();
	console.log(data);
}
