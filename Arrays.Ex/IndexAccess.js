function solve(arrayArgs, num){
    let result = [];
    for (let index = 0; index < arrayArgs.length; index += num) {
        
        result.push(arrayArgs[index]);
    }

    return result;
}

console.log(solve([1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6,7,8,9,1], 4));