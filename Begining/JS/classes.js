class Person {
	constructor(id, name) {
		this.id = id;
		this.name = name;
	}
	speak() {
		console.log(`${this.name} is speaking...`);
	}
	walk() {
		console.log(`${this.name} is walking...`);
	}
}

class Student extends Person {
	constructor(id, name, rollno) {
		super(id, name);
		this.rollno = rollno;
	}
	code() {
		console.log(`${this.name} is coding...`);
	}
}
class SeniorStudent extends Student {
	constructor(id, name, rollno, specialization) {
		super(id, name, rollno);
		this.specialization = specialization;
	}

	speak() {
		console.log(`Er. ${this.name} is speaking...`);
	}
	research() {
		console.log(`${this.name} is working on ${this.specialization}`);
	}
}

let ss1 = new SeniorStudent(8, "Ankush", 8239, "Machine Learning");
