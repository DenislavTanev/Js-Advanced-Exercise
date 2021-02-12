function solve(num){

    let sum = 0;
    let lastDigit = num % 10;
    let equalCount = 0;

    while(num / 10 > 0){
        let digit = num % 10;
        sum += digit;

        if(digit !== lastDigit){
            equalCount++;
        }

        lastDigit = digit;
        num = Math.floor(num / 10);
    }

    console.log(equalCount === 0 ? true : false)
    console.log(sum)
}

solve(222222);