(function () {
    'use strict';
    let numbers = [1, 3, 5, 8, 7, 7, 55, 55, 63, 28, 28, 5];
    let unique = [],
        
        repeat = [];

    function delRepeat(numbers) {

        Input:
        for (let i = 0; i < numbers.length; i++) {
            let str = numbers[i];
            for (let j = 0; j < unique.length; j++) {
                while (unique[j] == str) {
                    repeat.push(str);
                    continue Input;
                }
            }
            unique.push(str);
        }
        Input1:
        for (let i = 0; i < repeat.length; i++) {
            let str = repeat[i];
            for (let j = 0; j < unique.length; j++) {
                while (unique[j] == str) {
                    unique.splice(j, 1);
                    console.log(unique);
                    continue Input1;
                }
            }
        }
        return unique;
    }
    function delUnique(repeat) {
        
        return unique;
    }
    alert(delRepeat(numbers));
    

}());