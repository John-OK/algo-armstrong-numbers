// How can you make this more scalable and reusable later?
// questions the program needs to answer: 
// 1. how many digits? variable for that value is input to the math operation
// 2. does sum of individual digit values to the power of the # digits = the number itself
// how to find # of digits:

//use 2 functions
//1. first checks whether a number is an armstrong number: isArmstrongNumber
// 2. 2nd runs the first on the array/list: findArmstrongNumbers

exports.findArmstrongNumbers = function(array) {
    return array.filter(each => isArmstrongNumber(each))
};


function isArmstrongNumber(num){
    
    let numString = num.toString()
    //return numString
    let numStringArray = numString.split("")
    let powerNum = numStringArray.length
    let numStringArray2 = numStringArray.map(x => (+x)**powerNum)
    let finalSum = numStringArray2.reduce((p,c) => p+c)
    
    return finalSum === num
}

//console.log(findArmstrongNumbers([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 153, 155, 156, 370, 371, 407, 507]))
