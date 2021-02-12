const lookupChar = require('./charLookUp');
const expect = require('chai').expect;
let assert = require('chai').assert;

describe('lookupChar', () => {

    //lookupChar(string, index)
    it('with an invalid type parameter, should return undefined', function () {
        expect(lookupChar({'das': 1}, 2)).to.equal(undefined, "Function did not return the correct result!");
    });
    it('with an invalid type parameter, should return undefined', function () {
        expect(lookupChar('da', 'da')).to.equal(undefined, "Function did not return the correct result!");
    });
    it('with an invalid type parameter, should return undefined', function () {
        expect(lookupChar(1, 'da')).to.equal(undefined, "Function did not return the correct result!");
    });
    it('with an invalid type parameter, should return undefined', function () {
        expect(lookupChar('dada', 4.321)).to.equal(undefined, "Function did not return the correct result!");
    });
    it('with negative index, should return empty string', function(){
        assert.equal(lookupChar("roar", -3), "Incorrect index", "Function did not return the correct result!");
    });
    it('with index higher than strings lenght, should return empty string', function(){
        assert.equal(lookupChar('river', 8), "Incorrect index", "Function did not return the correct result!");
    });
    it('with multiple consecutive checks, should return correct values', function(){
        assert.equal(lookupChar('river', 2), 'v',"Function did not return the correct result!");
        assert.equal(lookupChar('cat', 2), 't',"Function did not return the correct result!");
        expect(lookupChar('engine', 0)).to.equal('e',"Function did not return the correct result!");
    });
});