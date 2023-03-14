class Pet {
	constructor(name, age) {
		console.log('IN PET CONSTRUCTOR!')
		this.name = name;
		this.age = age;
	}
	eat() {
		return `${this.name} is eating!`
	}
}


class Cat extends Pet {
	constructor(name, age, livesleft = 9) {
		console.log('IN CAT CONSTRUCTOR!')
		// super - a reference to the super class 
		// reference to what we're extending from 
		super(name, age)
		this.livesleft = livesleft;
	}
	meow() {
		return 'MEOWWWW'
	}
}

class Dog extends Pet {
	bark() {
		return 'WOOOOF!'
	}
	eat() {
		return `${this.name} scarfs his food!`
	}
} 
