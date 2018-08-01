const expect = require('chai').expect;
const fizzBuzzer = require('../fizzBuzzer');

describe('fizzBuzz', function(){

    it(`should give "fizz" if divisble 
        by 3 "buzz" if divisble by 5 and "fizzbuzz" if divisble by 15
    `, function(){
        const normalCases = {
            "fizz": [3,6,9],
            "buzz": [5,10, 20],
            "fizz-buzz": [15,30, 45]
        };
        Object.keys(normalCases).forEach(function(key){
            normalCases[key].forEach(function(value){
                expect(fizzBuzzer(value)).to.equal(key);
            });
        });
    });
    it("shoud through error if not a number", function(){
        const badCases =['a', '15', '5'];

        badCases.forEach(function(item){
            expect(item).to.not.be.a('number');
        })
    })
})