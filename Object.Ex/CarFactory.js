function solve(worker){
    function getEngine(power){
        const engines = [
            { power: 90, volume: 1800 },
            { power: 120, volume: 2400 },
            { power: 200, volume: 3500 }
        ];
        let result;
        for (let x = 0; x < engines.length; x++) {
            if (engines[x].power >= power) {
                result = engines[x];
                return result;
            }
            
        }
    }
    function getCarriage(carriage, color){
        return{
            type: carriage,
            color
        };
    };
    function getWheels(wheelsize){
        let wheel = Math.floor(wheelsize) % 2 === 0 ? Math.floor(wheelsize) - 1 : Math.floor(wheelsize);
        return Array(4).fill(wheel, 0, 4);
    }
    return{
        model: worker.model,
        engine: getEngine(worker.power),
        carriage: getCarriage(worker.carriage, worker.color),
        wheels: getWheels(worker.wheelsize)
    };
}

console.log(solve({ model: 'VW Golf II',
power: 90,
color: 'blue',
carriage: 'hatchback',
wheelsize: 14 }));