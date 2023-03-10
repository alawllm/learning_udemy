// when called with new
// creates a blank, plain Javascript Object
// Links (sets the constructor of) this object to another object
// Passes the newly created object from Step1 as the this content 
// Returns this if the function doesn't return its own object 

// function Color(r, g, b) {

//     this.r = r;
//     this.g = g;
//     this.b = b;

// }

// defining method on the prototype instead of on the object itself 

//this has to be pointed if not it will point at the window object

// Color.prototype.rgb = function () {
//     const { r, g, b } = this;
//     return `rgb(${r}, ${g}, ${b})`;
// }
// // without new keyword, this refers to the window Object
// // with new keyword, this refers to the new object 

// Color.prototype.hex = function () {
//     const { r, g, b } = this;
//     return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)
// }

// Color.prototype.rgba = function (a = 1.0) {
//     const { r, g, b } = this;
//     return `rgba(${r}, ${g}, ${b}, ${a})`
// }
// //color1.hex === color2.hex TRUE
// //they are pointing to the same method because it is defined on the prototype

// const color1 = new Color(40, 70, 60)
// const color2 = new Color(0, 0, 0)

// constructor - will execute immidiately when a new func Color is created 

// this and sth - properties added to the object 

class Color {
    constructor(r, g, b, name) {
        this.r = r;
        this.g = g;
        this.b = b;
        this.name = name;
    }

    innerRGB() {
        const { r, g, b } = this;
        return `${r}, ${g}, ${b}`;
    }
    // referencing inner method 
    rgb() {

        return `rgb(${this.innerRGB()})`;
    }
    // alpha value defined as an argument 
    rgba(a = 1.0) {
        return `rgba(${this.innerRGB()}, ${a})`;
    }
    hex() {
        const { r, g, b } = this;
        return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)
    }
}

const red = new Color(255, 67, 89, 'tomato')
const white = new Color(255, 255, 255, 'white')