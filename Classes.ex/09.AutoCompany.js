function autoCompany(input) {
    let cars = {};

    for (let data of input) {
        let [carBrand, carModel, producedCars] = data.split(" | ");
        producedCars = Number(producedCars);

        if (!cars[carBrand]) {
            cars[carBrand] = [];
            cars[carBrand].push({ carModel, producedCars });
        } else if (cars[carBrand].some(car => car.carModel === carModel)) {
            let targetCar = cars[carBrand].find(car => car.carModel === carModel);
            targetCar.producedCars += producedCars;
        } else {
            cars[carBrand].push({ carModel, producedCars });
        }
    }

    // console.log(cars)
    for (const [brand, car] of Object.entries(cars)) {
        console.log(brand);
        for (const currentCar of Object.values(car)) {
            console.log(`###${currentCar.carModel} -> ${currentCar.producedCars}`);
        }
    }
}