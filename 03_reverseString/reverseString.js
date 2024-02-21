const reverseString = function(string) {

    let char = string.length-1;
    let reversed = "";

    do {
        reversed += string.charAt(char);
        char--;
    } while (char >= 0);

    return reversed;
};

// Do not edit below this line
module.exports = reverseString;
