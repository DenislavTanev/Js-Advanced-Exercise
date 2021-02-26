const { describe } = require('mocha');
const { assert } = require('chai');

const numberOperations = {
    powNumber: function (num) {
        return num * num;
    },
    numberChecker: function (input) {
        input = Number(input);

        if (isNaN(input)) {
            throw new Error('The input is not a number!');
        }

        if (input < 100) {
            return 'The number is lower than 100!';
        } else {
            return 'The number is greater or equal to 100!';
        }
    },
    sumArrays: function (array1, array2) {

        const longerArr = array1.length > array2.length ? array1 : array2;
        const rounds = array1.length < array2.length ? array1.length : array2.length;

        const resultArr = [];

        for (let i = 0; i < rounds; i++) {
            resultArr.push(array1[i] + array2[i]);
        }

        resultArr.push(...longerArr.slice(rounds));

        return resultArr
    }
};

describe('Tests...', function(){
    describe('PowNumber check', function(){
        it('check power', function(){
            assert.equal(numberOperations.powNumber(2), 4);
        });
        it('check power', function(){
            assert.equal(numberOperations.powNumber(-2), 4);
        });
        it('check power', function(){
            assert.equal(numberOperations.powNumber('2'), 4);
        });
    });
    describe('numberChecker', function(){
        it('check is NaN', function(){
            assert.throw(() => numberOperations.numberChecker('pesho'), 'The input is not a number!')
        });
        it('check n < 100', function(){
            assert.equal(numberOperations.numberChecker(99), 'The number is lower than 100!');
        });
        it('check n < 100', function(){
            assert.equal(numberOperations.numberChecker(100), 'The number is greater or equal to 100!');
        });
        it('check n < 100', function(){
            assert.equal(numberOperations.numberChecker('99'), 'The number is lower than 100!');
        });
        it('check n > 100', function(){
            assert.equal(numberOperations.numberChecker(110), 'The number is greater or equal to 100!');
        });
    });
    describe('sumArrays', function(){
        it('check sum of 2 arr', function(){
            const arr1 = [1, 3, 5];
            const arr2 = [3, 2, 4, 2];
            assert.deepEqual(numberOperations.sumArrays(arr1, arr2), [4, 5, 9, 2]);
        });
        it('check sum of 2 arr', function(){
            const arr1 = [1, 3, 5, 2, -3];
            const arr2 = [3, 2, 4, 2];
            assert.deepEqual(numberOperations.sumArrays(arr1, arr2), [4, 5, 9, 4, -3]);
        });
        
        it('check sum of 2 arr', function(){
            const arr1 = [1];
            const arr2 = [1];
            assert.deepEqual(numberOperations.sumArrays(arr1, arr2), [2]);
        });
        it('check sum of 2 arr', function(){
            const arr1 = ['2'];
            const arr2 = ['2'];
            assert.deepEqual(numberOperations.sumArrays(arr1, arr2), ['22']);
        });
    });
    
});