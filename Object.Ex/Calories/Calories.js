function foodFactory(input){
    const foods = {};
    for (let x = 0; x < input.length; x += 2) {
        foods[input[x]] = Number(input[x + 1]);  
    };
    return foods;
}