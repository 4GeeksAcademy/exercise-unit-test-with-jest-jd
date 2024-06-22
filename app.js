
const sum= (a,b)=>{
    return a+b
}
console.log(sum(7,3))


let oneEuroIs = {
    "JPY": 156.5,    // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}
const fromEuroToDollar = function (valueInEuro) {
    let valueInDollar = valueInEuro * oneEuroIs.USD;
    return valueInDollar;
}

const fromDollarToYen = function (valueInDollar) {
    let valueInEuro = valueInDollar / oneEuroIs.USD;
    valueInYen = valueInEuro * oneEuroIs.JPY;
    return valueInYen;
}

const fromYenToPound = function (valueInYen) {
    let valueInEuro = valueInYen / oneEuroIs.JPY;
    let valueInPound = valueInEuro * oneEuroIs.GBP;
    return valueInPound;
}

module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound };