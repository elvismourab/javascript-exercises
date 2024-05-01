const palindromes = function (str) {
    // Removes all non-alphanumeric characters from the input string and converts it to uppercase.
    str = str.toUpperCase().replace(/[^\w'"]|_/g, '');

    // Reverses the transformed string.
    let result = str.split('').reverse().join('');

    // Compares the reversed string with the original transformed string
    return (result == str);
};

// Do not edit below this line
module.exports = palindromes;
