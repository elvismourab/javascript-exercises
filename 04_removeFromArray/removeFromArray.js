const removeFromArray = function(arr, ...args) {
    //const newArray = [];
    for(let i = 0; i < arr.length; i++) {
        for(arg of args) {
            if(arr[i] === arg) {
                arr.splice(i, 1);
                i--;
            }
        }
    }
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
