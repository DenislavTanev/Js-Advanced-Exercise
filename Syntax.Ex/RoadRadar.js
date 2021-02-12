function radar(speed, area){

    let speedLimit = 0;

    if(area == 'city'){
        speedLimit = 50;
    }else if(area == 'residential'){
        speedLimit = 20;
    }else if(area == 'interstate'){
        speedLimit = 90;
    }else if(area == 'motorway'){
        speedLimit = 130;
    };

    if(speed <= speedLimit){
        console.log(`Driving ${speed} km/h in a ${speedLimit} zone`);
    }else{
        let difference = speed - speedLimit;
        let status;

        if(difference <= 20){
            status = 'speeding';
        }else if(difference <= 40 && difference > 20){
            status = 'excessive speeding';
        }else if(difference > 40){
            status = 'reckless driving';
        }

        console.log(`The speed is ${difference} km/h faster than the allowed speed of ${speedLimit} - ${status}`)
    }
}

radar(131, 'interstate');