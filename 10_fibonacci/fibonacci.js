const fibonacci = function (index) {
    index = Number(index);
    if (index < 0) return 'OOPS';
    if (index === 0) return 0;

    const x = [];
    x[0] = 1;
    x[1] = 1;

    for (let i = 2; i < index; i++) {
        x[i] = x[i - 1] + x[i - 2];
    }
    return x[x.length - 1];
};

// Do not edit below this line
module.exports = fibonacci;
