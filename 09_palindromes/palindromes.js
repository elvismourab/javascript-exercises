const palindromes = function (str) {
    str = str.toUpperCase().replace(/[^A-Z0-9]|_/g, '');
    return str.split('').reverse().join('') == str;
};

// Do not edit below this line
module.exports = palindromes;
