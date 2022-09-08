function oddishOrEvenish(number){

    let userNumber = number.toString();
    let sumOfNumbers = 0;
    if(userNumber[0] == '-'){
        for(let i = 1; i < userNumber.length;i++){
        sumOfNumbers += parseInt(userNumber[i]);
        }
        if(sumOfNumbers%2 == 0){
            return 'Even';
        }
        else{
            return 'Odd';
        }
    }
    else{
        for(let i = 0; i < userNumber.length;i++){
            sumOfNumbers += parseInt(userNumber[i]);
        }
        //Control number is odd or even
        if(sumOfNumbers%2 == 0){
            return 'Even';
        }
        else{
            return 'Odd';
        }
    }
}
console.log(oddishOrEvenish(21));