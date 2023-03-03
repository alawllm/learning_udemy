// making own method 

String.prototype.yell = function () {
    return `ÒMG!!! ${this.toUpperCase()} !!!! AHHHHH`
}

// object that stores methods for every possible array 
// replacing existing pop method 

Array.prototype.pop = function () {
    return 'sorry i want that element, i will never pop it off'
}
