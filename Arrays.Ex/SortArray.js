function solve(arr) {
    let num = 1;
    if (arr.lenght != 0){
        arr.sort().forEach(e => {
            console.log(num + '.' + e);
            num++;
        });
    }
}

solve(['Bob', 'Maya', 'Amanda', 'Paul', 'Kayl', 'Jim', 'Sam'])