const mathEnforcer = require('./mathEnforcer');
const expect = require('chai').expect;

describe('mathEnforcer', function(){

    describe('addFive', function() {
        //add(num)
        it('with an invalid type parameter, should return undefined', function(){
            expect(mathEnforcer.addFive('das')).to.equal(undefined, "Function did not return the correct result!");
        });
        it('with positive number, should return correct values', function(){
            expect(mathEnforcer.addFive(12)).to.equal(17, "Function did not return the correct result!");
        });
        it('with negative number, should return correct values', function(){
            expect(mathEnforcer.addFive(-10)).to.equal(-5, "Function did not return the correct result!");
        });
        it('with floating number, should return correct values', function(){ 
            expect(mathEnforcer.addFive(4.2)).to.be.closeTo(9.2, 0.01);
        });
    });
    describe('subtractTen', function() {
        //sub(num)
        it('with an invalid type parameter, should return undefined', function(){
            expect(mathEnforcer.subtractTen('das')).to.equal(undefined, "Function did not return the correct result!");
        });
        it('with positive number, should return correct values', function(){
            expect(mathEnforcer.subtractTen(10)).to.equal(0, "Function did not return the correct result!");
        });
        it('with negative number, should return correct values', function(){
            expect(mathEnforcer.subtractTen(-10)).to.equal(-20, "Function did not return the correct result!");
        });
        it('with floating number, should return correct values', function(){
            expect(mathEnforcer.subtractTen(4.2)).to.be.closeTo(-5.8, 0.01);
        });
    });
    describe('sum', function() {
        //sum(num1,num2)
        it('with an invalid type parameter, should return undefined', function(){
            expect(mathEnforcer.sum('das', 2)).to.equal(undefined, "Function did not return the correct result!");
            expect(mathEnforcer.sum(3, true)).to.equal(undefined, "Function did not return the correct result!");
            expect(mathEnforcer.sum('das', false)).to.equal(undefined, "Function did not return the correct result!");
        });
        it('with positive number, should return correct values', function(){
            expect(mathEnforcer.sum(10, 2)).to.equal(12, "Function did not return the correct result!");
        });
        it('with negative number, should return correct values', function(){
            expect(mathEnforcer.sum(18, -10)).to.equal(8, "Function did not return the correct result!");
        });
        it('with floating number, should return correct values', function(){
            expect(mathEnforcer.sum(0.8, -1.2)).to.be.closeTo(-0.4, 0.01);
        });
    });
});
