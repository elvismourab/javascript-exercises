const repeatString = function(string, num) {
    let stringEcho = "";

    if (num < 0) return "ERROR";

    for(let i = 0; i < num; i++) {
        stringEcho += string;
    }
    return stringEcho;
};

// Do not edit below this line
module.exports = repeatString;
