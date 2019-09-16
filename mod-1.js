//unary, boolean, empty values; type conversions
// typeof is a unary operator.
// logical operators: &&, || , !
// empty values: null and undefined

// console.log(typeof 4);
// console.log(typeof 'x');
// console.log(typeof true);

// js does string evaluation from left to right comparing unicodes with that particular word.
console.log('a'<'A');// it says false because unicode value of a=127 which is bigger than unicode of A=65
console.log('b'<'a');// same as above, will produce false on compilation.
console.log(NaN===NaN) // Even I am speechless here!
console.log(true?1:2)

/* automatic type conversion */

// console.log(8*null); //0
// console.log(5-'1');//4
// console.log('5'-1);//4
// console.log('5'+1);//51
// console.log('five'*2);//NaN
// console.log(false==0);//true

console.log(null == undefined);
console.log(null == 0);
// so null is undefined and not 0 as is evident from above.

console.log(null || 'user'); // null is a false value, || operator sends back true value, in this case 'user'.
console.log(null && user); // null is false value, && returns false value, in this case null.



