function sort(arr, command){

    const map={
        'asc':(a,b)=>a-b,
        'desc':(a,b)=>b-a
    }
    return arr.sort(map[command]);

}

