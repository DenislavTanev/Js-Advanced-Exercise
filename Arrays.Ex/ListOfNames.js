function solve(input) {
    let result = input.slice(0)
        .sort((a, b) => a.localeCompare(b))
        .map((name, index, intialArray) => {
            let result = `${index + 1}.${name}`
            return result
        }
        );
    return result.join("\n");

}