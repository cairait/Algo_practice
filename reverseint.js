/**
 * @param {number} x
 * @return {number}
 */

//make number to a string, spit into array, reverse array, join back into number
//parseFloat removes 00 and returns whole number
//multiple by sign of x to maintain - or + sign

var reverse = function(x) {
    let reversed = parseFloat(x.toString().split('').reverse().join('')) * Math.sign(x)
    
    return reversed
    
};

console.log(reverse(-291928347))