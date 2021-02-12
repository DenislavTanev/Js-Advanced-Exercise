function solve(steps, foot, speed){

    let distance = steps * foot;
    let speedForMeterInSec = speed / 3.6;

    let restTime =Math.floor(distance / 500);
    let walkTime = distance / speedForMeterInSec + restTime * 60;
    
    let timeInHour = Math.floor(walkTime / 3600);
    let timeInMins = Math.floor(walkTime / 60);
    let timeInSecs = walkTime % 60;

    timeInHour = timeInHour < 10 ? '0' + timeInHour : timeInHour;
    timeInMins = timeInMins < 10 ? '0' + timeInMins : timeInMins;
    timeInSecs = timeInSecs < 10 ? '0' + timeInSecs : timeInSecs;

    console.log(`${timeInHour}:${timeInMins}:${timeInSecs.toPrecision(2)}`);
    
}

solve(2564, 0.70, 5.5);