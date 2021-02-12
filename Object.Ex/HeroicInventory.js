function solve(input)
{
    let output=[];
    for(const iterator of input)
    {
        let [name,level,items]=iterator.split(' / ');
        output.push(
            {
                name: name,
                level: Number(level),
                items: items ? items.split(', ') : [],
            });
    }   
    return JSON.stringify(output);
}