function solve (arr){
    let num = 1;
    let result = [];

    for (let index = 0; index < arr.length; index++) {
        
        if (arr[index] == 'add') {
            result.push(num);
            num++;
        }else if(arr[index] == 'remove'){
            if (result.length > 0) {
                result.pop();
            }
            num++; 
        }
    }
    
    if (result.length == 0) {
        console.log('Empty');
        
    }else{
        for (let index = 0; index < result.length; index++) {
            console.log(result[index]);
       }
    }
    
}