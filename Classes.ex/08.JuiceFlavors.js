function factory(arr) {
    class JuiceFlavors {
        fruits;
        bottles;
        constructor(arr) {
            this.arr = arr;
            this.fruits = [];
            this.bottles = [];
        }

        splitLine(line) { return line.split(' => ') };


        addFruit(fruit, quantity) {
            if (!this.fruits[fruit]) {
                this.fruits.push(fruit, 0);
            }
            this.fruits[fruit] += quantity;

            if (this.fruits[fruit] >= 1000) {
                this.addBottle(fruit, this.fruits[fruit])
                this.fruits[fruit] %= 1000;

            };
        }

        addBottle(fruit, quantity) {
            if (!this.bottles[fruit]) {
                this.bottles.push(fruit, 0);
            }
            this.bottles[fruit] += Math.floor(quantity / 1000);
        }

        factory() {
            this.arr.map(this.splitLine).map(element => {
                this.addFruit(element[0], element[1]);
            });
        }
        toString() {
            return this.bottles.join(`\n`);
        }

    }
    const args = new JuiceFlavors(arr);
    args.factory();
    console.log(args.toString())

}
//input
factory(['Kiwi => 234',
    'Pear => 2345',
    'Watermelon => 3456',
    'Kiwi => 4567',
    'Pear => 5678',
    'Watermelon => 6789']);


//expected result
//Pear => 8
//Watermelon => 10
//Kiwi => 4