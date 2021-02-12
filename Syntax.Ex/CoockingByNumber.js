function cook(num, comm1, comm2, comm3, comm4, comm5){
    let number = parseInt(num);
    let cmdArgs = [comm1, comm2, comm3, comm4, comm5];

    for (let index = 0; index < cmdArgs.length; index++) {
        
        let currentCommand = cmdArgs[index];

        if (currentCommand == 'chop') {
            number /= 2;
        }else if(currentCommand == 'spice'){
            number++;
        }else if(currentCommand == 'bake'){
            number *= 3;
        }else if(currentCommand == 'fillet'){
            number *= 0.80;
        }else if(currentCommand == 'dice'){
            number = Math.sqrt(number);
        };

        console.log(number);
    }
}