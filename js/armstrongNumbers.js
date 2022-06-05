isArmstrongNumber = num => {
    // Make num a string and split it so that each number can be prcoessed individually
    let numString = num.toString()
    let digits = numString.split("")

    // Run the Armstrong calculation
    let exponent = digits.length
    let raisedDigits = digits.map(digit => (+digit)**exponent)
    let sumOfRaisedDigits = raisedDigits.reduce((aggregator,raisedDigit) => aggregator+raisedDigit)
    
    return sumOfRaisedDigits === num
}

exports.findArmstrongNumbers = array => array.filter(element => isArmstrongNumber(element));

findAllArmstrongNumbers = num => {
    array = Array.apply(null, {length: num}).map(Number.call, Number)
    return findArmstrongNumbers(array);
}

// console.log(findAllArmstrongNumbers(9999));
