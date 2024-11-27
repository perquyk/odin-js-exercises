const fibonacci = function(x) {
    if(x<0){return "OOPS"};
    const output = [0,1];
    
    for(let i = 0; i<x ; i++){
        output.push(output[i+1]+output[i])
    }
    return  output[x];
};

// Do not edit below this line
module.exports = fibonacci;
