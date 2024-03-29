//JS is a functional language. Period.

// A simple function, notice that we can have a function declared inside a variable.
const square = function (c) {
    return c * c;
}
console.log(square(5))

// //different forms of  functions
// const whoopsie =function(){
//     console.log('whoopsie i created a mistake!')
// }
// whoopsie()

// const pow = function(power, exponent){
//     let result = 1;
//     for(let count=0;count<exponent;count++){
//         result*=power;
//     }
//     return result
// }
// console.log(pow(2,5))

//Global and block scopes
// function calls create instances of the bindings(functions)
// let a=5
// let fun = function(){
//     let c =6
//     console.log(a,c);
// }
// fun()
// console.log(a) // works smoothly as it is global.
// console.log(c) // will throw error as it is confined in the local binding not global binding.


// let x = 5
// let fun = ()=>{
//      let y=5
//      let z = 9
//      console.log(x+y+z)
//     }
// console.log(y)// ReferenceError, as it is local to function.
// console.log(x+y+z) // outputs 10

//lets play with functions
let funhere = () => {
    let y = 20
    let z = 30
    fun2here = () => {
        console.log('inside funhere')
        console.log(x, y, z)
    }
    console.log(fun2here)
    console.log(x + y + z)
}
console.log(funhere)

// function declaration are not parts of top bottom approach, here the function was declared later and called beofre its declaration still worked.
console.log("The future says:", future());
function future() {
    return "You'll never have flying cars";
}

// No problem with following functions execution, optional parameter execution.
function sq(x) { return x * x; }
console.log(sq(4, true, "hedgehog"));
// → 16


// showing how the function takes default values if no user values are provided.
function power(base, exponent = 2) {
    let result = 1;
    for (let count = 0; count < exponent; count++) {
        result *= base;
    }
    return result;
}
console.log(power(4));
// → 16
console.log(power(2, 6));
// → 64


// CLOSURE: Important, a function that creates instances of a local binding is called a closure.

function multiplier(factor) {
    return number => number * factor;
}
let twice = multiplier(2);
console.log(twice(5));
// → 10



// A recursive function
function power(base, exponent) {
    if (exponent == 0) {
        return 1;
    } else {
        return base * power(base, exponent - 1);
    }
}
console.log(power(2, 3));
    // → 8
