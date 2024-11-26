const removeFromArray = function(array, ...items) {
    
    items.forEach(item => 
        { 
            array = array.filter((value) => value !== item);
            return array;
        });

    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
