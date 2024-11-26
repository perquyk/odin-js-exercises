const sumAll = function(...numbers) {
    let num = numbers.sort((a,b) => a - b); 
    let end = num[1];
    let start = num[0];
    let outcome = 0;
    if(num[0] < 0){return "ERROR"}
    if( numbers[1] !== parseInt(numbers[1]) || numbers[0]  !== parseInt(numbers[0] )){ return "ERROR"}
    
    while(start <= end){
        outcome += start;
        start++;
    }
    return outcome
};

// Do not edit below this line
module.exports = sumAll;
