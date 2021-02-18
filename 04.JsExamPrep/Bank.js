class Bank {
    _totalMoney = [];
    _transactions = [];
    constructor(bankName) {
        this._bankName = bankName;
        this.allCustomers = [];
    }

    newCustomer(customer) {
        const { firstName, lastName, personalId } = customer;
        console.log(personalId);
        if (this.allCustomers.find(e => e.personalId == personalId)) {
            throw new Error(`${firstName} ${lastName} is already our customer!`);
        }
        this.allCustomers.push({ firstName, lastName, personalId });
        this._transactions[personalId] = [];
        this._totalMoney[personalId] = 0;
        return { firstName, lastName, personalId };
    }

    depositMoney(personalId, amount) {
        if (!this.allCustomers.find(e => e.personalId == personalId)) {
            throw new Error('We have no customer with this ID!');
        };
        this._totalMoney[personalId] += amount;
        const { firstName, lastName } = this.allCustomers.find(e => e.personalId == personalId);
        this._transactions[personalId].push(`${firstName} ${lastName} made deposit of ${amount}$!`);

        return `${this._totalMoney[personalId]}$`;
    }

    withdrawMoney(personalId, amount) {
        if (!this.allCustomers.find(e => e.personalId == personalId)) {
            throw new Error('We have no customer with this ID!');
        };

        const { firstName, lastName } = this.allCustomers.find(e => e.personalId == personalId);
        if (this._totalMoney[personalId] < amount) {
            throw new Error(`${firstName} ${lastName} does not have enough money to withdraw that amount!`);
        }
        this._totalMoney[personalId] -= amount;
        this._transactions[personalId].push(`${firstName} ${lastName} withdrew ${amount}$!`);

        return `${this._totalMoney[personalId]}$`;
    }

    customerInfo(personalId) {
        if (!this.allCustomers.find(e => e.personalId == personalId)) {
            throw new Error('We have no customer with this ID!');
        };
        const { firstName, lastName } = this.allCustomers.find(e => e.personalId == personalId);

        let result = `Bank name: ${this._bankName}\n`;
        result += `Customer name: ${firstName} ${lastName}\n`;
        result += `Customer ID: ${personalId}\n`;
        result += `Total Money: ${this._totalMoney[personalId]}$\n`;
        result += `Transactions:\n`;

        if (this._transactions[personalId].length !== 0) {
            let transactionArr = [];
            let count = 1;
            for (const transaction of this._transactions[personalId]) {
                transactionArr.unshift(`${count}. ${transaction}`);
                count++;
            }
            result += transactionArr.join(`\n`);
        }
        return result;
    }
}

let bank = new Bank("SoftUni Bank");
console.log(bank.newCustomer({ firstName: "Svetlin", lastName: "Nakov", personalId: 6233267 }));
console.log(bank.newCustomer({ firstName: "Mihaela", lastName: "Mileva", personalId: 4151596 }));
bank.depositMoney(6233267, 250);
console.log(bank.depositMoney(6233267, 250));
bank.depositMoney(4151596,555);
console.log(bank.withdrawMoney(6233267, 125));
console.log(bank.customerInfo(6233267));