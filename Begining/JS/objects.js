//OOps
//Encapsulation, Inheritance, Abstraction, Polymorphism

let tv = {
	//properties
	currentVolume: 0,
	isRunning: false,
	color: "black",
	//Methods
	on() {
		console.log("Tv is turnning on...");
		this.isRunning = true;
	},
	off() {
		console.log("Tv has turned off..");
		this.isRunning = false;
	},
	volumeUp() {
		this.currentVolume++;
		console.log(this.currentVolume);
	},
	volumeDown() {
		this.currentVolume--;
		console.log(this.currentVolume);
	},
};
