function solve(width,height,color)
{
    function capitalize(word)
    {
        return word[0].toUpperCase()+ word.slice(1);
    }
    function calcArea(width,height)
    {
        return this.width*this.height;
    }
    return {
        width,
        height,
        color: capitalize(color),
        calcArea
    }
}