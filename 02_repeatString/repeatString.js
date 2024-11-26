const repeatString = function(string, num) {
    let counter = 0;
    if(num<0){return 'ERROR'}
    let newstring = '';
    while(counter<num){
        newstring += string;
        counter++;
    }
    return newstring;
};

// Do not edit below this line
module.exports = repeatString;
