
const { sum,fromEuroToDollar, fromDollarToYen, fromYenToPound } = require('./app.js');
const { test, expect } = require('@jest/globals');

test ("adds 14+9 to equal 23",()=>{
    let total = sum (14,9);
    expect(total).toBe(23);
 })

test("One euro should be 1.07 dollars", function() {
    const dollars = fromEuroToDollar(3.5);
    const expected = 3.5 * 1.07;

    expect(fromEuroToDollar(3.5)).toBe(3.745); 
})

test("convert the value of dollar to yen", function () {
    const yenes = fromDollarToYen(1);
    const expected = (1 / 1.07) * 156.5;
    expect(fromDollarToYen(1)).toBe(expected);
})

test("convert the value of yenes to pound", function () {
    const pound = fromYenToPound(1);
    const expected = (1 / 156.5) * 0.87;
    expect(fromYenToPound(1)).toBe(expected);
})