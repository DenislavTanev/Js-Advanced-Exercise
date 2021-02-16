const { describe } = require('mocha');
const { assert } = require('chai');
const expect = require('chai').expect;

pizzUni = {
    makeAnOrder: function (obj) {

        if (!obj.orderedPizza) {
            throw new Error('You must order at least 1 Pizza to finish the order.');
        } else {
            let result = `You just ordered ${obj.orderedPizza}`
            if (obj.orderedDrink) {
                result += ` and ${obj.orderedDrink}.`
            }
            return result;
        }
    },

    getRemainingWork: function (statusArr) {

        const remainingArr = statusArr.filter(s => s.status != 'ready');

        if (remainingArr.length > 0) {

            let pizzaNames = remainingArr.map(p => p.pizzaName).join(', ')
            let pizzasLeft = `The following pizzas are still preparing: ${pizzaNames}.`

            return pizzasLeft;
        } else {
            return 'All orders are complete!'
        }

    },

    orderType: function (totalSum, typeOfOrder) {
        if (typeOfOrder === 'Carry Out') {
            totalSum -= totalSum * 0.1;

            return totalSum;
        } else if (typeOfOrder === 'Delivery') {

            return totalSum;
        }
    }
}

describe("Pizza", function () {
    describe("MakeAnOrder", function () {
        it("with no pizza ordered should throw error", function () {
            let pizza = { orderedDrink: 'drink' };
            let pizza1 = {};

            assert.throw(() => pizzUni.makeAnOrder(pizza), 'You must order at least 1 Pizza to finish the order.');
            assert.throw(() => pizzUni.makeAnOrder(pizza1), 'You must order at least 1 Pizza to finish the order.');

        });
        it("order pizza", function () {
            let pizza = { orderedPizza: 'pizza' };

            assert.equal(pizzUni.makeAnOrder(pizza), `You just ordered pizza`);
        });
        it("order pizza and drink", function () {
            let pizza = { orderedPizza: 'margarita', orderedDrink: 'cola' };

            expect(pizzUni.makeAnOrder(pizza)).to
                .equal(`You just ordered ${pizza.orderedPizza}` + ` and ${pizza.orderedDrink}.`, "...");
        });
    });

    describe("getRemainingWork", function () {

        it("with not ready pizza", function () {
            let statusArr3 = [
                { pizzaName: 'pizza33', status: "preparing" },
                { pizzaName: 'pizza44', status: "preparing" }
            ];
            expect(pizzUni.getRemainingWork(statusArr3)).to
                .equal('The following pizzas are still preparing: pizza33, pizza44.', "...");
        });
        it("with not ready and ready pizza", function () {
            let statusArr = [
                { pizzaName: 'pizza', status: "ready" },
                { pizzaName: 'pizza2', status: "ready" },
                { pizzaName: 'pizza3', status: "preparing" },
                { pizzaName: 'pizza4', status: "preparing" }
            ];
            expect(pizzUni.getRemainingWork(statusArr)).to
                .equal('The following pizzas are still preparing: pizza3, pizza4.', "...");
        });
        it("with all ready pizzas", function () {
            let statusArr2 = [
                { pizzaName: 'pizza', status: "ready" },
                { pizzaName: 'pizza2', status: "ready" }
            ];
            assert.equal(pizzUni.getRemainingWork(statusArr2), 'All orders are complete!');
        });
    });

    describe("orderType", function () {
        it("with order type delivery and sum 100 sholud return 100", () => {
            assert.equal(pizzUni.orderType(100, 'Delivery'), 100);
        })
        it("with order type carry out and sum 100 should return 90", () => {
            expect(pizzUni.orderType(100, 'Carry Out')).to.equal(90, "...");
        })
    });

});
