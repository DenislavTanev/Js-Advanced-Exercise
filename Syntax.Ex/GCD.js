function greatestCommonDivisor(num1 , num2){
    if(num1 > num2){

      let divisor = num2;

      for (let index = divisor; index > 0; index--) {
          
          if(num1 % index == 0 && num2 % index == 0){
            console.log(index);
            break;
          }
          
      } 
            
    }else if(num2 > num1){

        let divisor = num1;

        for (let index = divisor; index > 0; index--) {
            
            if(num1 % index == 0 && num2 % index == 0){
                console.log(index);
                break;
            }
            
        } 
    }
}

greatestCommonDivisor(2154, 458);