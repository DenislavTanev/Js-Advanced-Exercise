function solve(arr) {
    let result = [];
    let currBiggestNum = 0;
    for (let i = 0; i < arr.length; i++) {
        
        if (arr[i] >= currBiggestNum) {
            result.push(arr[i]);
            currBiggestNum = arr[i];
        }
    }
    return result;
}
console.log(solve([1,2,3,8,3,4,10,9,12,13,18,15,24]));