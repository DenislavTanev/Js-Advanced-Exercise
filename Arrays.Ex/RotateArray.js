function solve(arr, rotations) {
    let result = arr.slice();
    let currItem;
    for (let i = 0; i < rotations; i++) {
        
        currItem = result.pop();
        result.unshift(currItem);
    };

    console.log(result.join(' '));
}