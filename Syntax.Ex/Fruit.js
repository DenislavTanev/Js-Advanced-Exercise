function CalculatePrice(fruit, weight, pricePerKilo){
    let price = (weight * pricePerKilo) / 1000;
    let weightInKilos = (weight / 1000).toFixed(2);

    console.log('I need $' + price.toFixed(2) + ' ' + 'to buy' + ' ' + weightInKilos + ' ' + 'kilograms' + ' ' + fruit + '.');
}

CalculatePrice('orange', 2500, 1.80);