(function () {
    'use strict';
    let numbers = [1, 3, 5, 5, 8, 7, 7, 55, 55, 63, 28, 28];
    
   
    function delRepeat (numbers) {
        let unique = [];
        Input:
        for(let i =0; i<numbers.length; i++){
            let str = numbers[i];
            for(let j = 0; j< unique.length; j++){
                if(unique[j] == str) continue Input;
            }
            unique.push(str);
        }
        return unique;
     }
     alert(delRepeat(numbers));
  
}());