const { describe } = require('mocha');
const { assert } = require('chai');

let dealership = {
    newCarCost: function (oldCarModel, newCarPrice) {

        let discountForOldCar = {
            'Audi A4 B8': 15000,
            'Audi A6 4K': 20000,
            'Audi A8 D5': 25000,
            'Audi TT 8J': 14000,
        }

        if (discountForOldCar.hasOwnProperty(oldCarModel)) {
            let discount = discountForOldCar[oldCarModel];
            let finalPrice = newCarPrice - discount;
            return finalPrice;
        } else {
            return newCarPrice;
        }
    },

    carEquipment: function (extrasArr, indexArr) {
        let selectedExtras = [];
        indexArr.forEach(i => {
            selectedExtras.push(extrasArr[i])
        });

        return selectedExtras;
    },

    euroCategory: function (category) {
        if (category >= 4) {
            let price = this.newCarCost('Audi A4 B8', 30000);
            let total = price - (price * 0.05)
            return `We have added 5% discount to the final price: ${total}.`;
        } else {
            return 'Your euro category is low, so there is no discount from the final price!';
        }
    }
}

describe("Tests...", function () {
    describe("newCarCost", function () {
        it("check if you are not returning your old car", () => {
            assert.equal(dealership.newCarCost('', 60000), 60000);
        });
        it("check if you are returning your old car", () => {
            assert.equal(dealership.newCarCost('Audi A4 B8', 60000), 45000);
        });
        it("check if you are returning your old car", () => {
            assert.equal(dealership.newCarCost('Audi A8 D5', 25000), 0);
        });
    });

    describe("CarEquipment", function () {

        it("check equipment", () => {
            let extrasArr = ['heated seats', 'sliding roof', 'sport rims', 'navigation'];
            let indexArr = [0, 3];
            assert.deepEqual(dealership.carEquipment(extrasArr, indexArr), ['heated seats', 'navigation']);
        });
    });

    describe("EuroCategory", function () {
        it("if ecology is higher than 4 you get discount", () => {
            assert.equal(dealership.euroCategory(4), `We have added 5% discount to the final price: 14250.`);
            assert.equal(dealership.euroCategory(6), `We have added 5% discount to the final price: 14250.`);
        });
        it("if ecology of your new car is lower than 4 u dont get discount", () => {
            assert.equal(dealership.euroCategory(3), 'Your euro category is low, so there is no discount from the final price!');
        });
    });
});
