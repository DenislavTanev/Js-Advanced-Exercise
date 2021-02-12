function solution() {
    const storage = {
        'protein': 0,
        'carbohydrate': 0,
        'fat': 0,
        'flavour': 0,
    }

    const recipes = {
        'apple': { 'protein': 0, 'carbohydrate': 1, 'fat': 0, 'flavour': 2 },
        'lemonade': { 'protein': 0, 'carbohydrate': 10, 'fat': 0, 'flavour': 20 },
        'burger': { 'protein': 0, 'carbohydrate': 5, 'fat': 7, 'flavour': 3 },
        'eggs': { 'protein': 5, 'carbohydrate': 0, 'fat': 1, 'flavour': 1 },
        'turkey': { 'protein': 10, 'carbohydrate': 10, 'fat': 10, 'flavour': 10 }
    }

    return function manager(input) {
        let args = input.split(' ');

        if (args == 'report') {
            return `protein=${storage.protein} carbohydrate=${storage.carbohydrate} fat=${storage.fat} flavour=${storage.flavour}`;
        } else {
            let command = args[0];
            let item = args[1];
            let count = Number(args[2]);

            if (command == 'restock') {
                storage[item] += count;
                return 'Success';

            } else if (command == 'prepare') {
                let meal = recipes[item];
                let mealProtein = meal.protein * count;
                let mealCarbo = meal.carbohydrate * count;
                let mealFat = meal.fat * count;
                let mealFlavour = meal.flavour * count;

                if(mealProtein > storage.protein){
                    return `Error: not enough protein in stock`
                }else if(mealCarbo > storage.carbohydrate){
                    return `Error: not enough carbohydrate in stock`
                }else if(mealFat > storage.fat){
                    return `Error: not enough fat in stock`
                }else if(mealFlavour > storage.flavour){
                    return `Error: not enough flavour in stock`
                }else{
                    storage.protein -= mealProtein;
                    storage.carbohydrate -= mealCarbo;
                    storage.fat -= mealFat;
                    storage.flavour -= mealFlavour;
                    return 'Success';
                }
            }
        }

    }
}


