'use strict';
//1
function sum(a, b) {
    if (!b) {
        return x => a + x;
    }
    return a + b;
}

const result = sum(7, 4);
const result2 = sum(7)(4);

console.log(result);
console.log(result2);


//2
function Inc() {
    let i = 0;
    this.toString = function() {
        return ++i;
    }
}

let inc = new Inc();

alert(inc);
alert(inc);
alert(inc + inc);