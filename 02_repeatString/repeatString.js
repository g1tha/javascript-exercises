const repeatString = function(str, n) {
    if (n < 0) {
        return 'ERROR';
    }
    let output = '';
    for (let i = 0; i < n; i++) {
        output += str;
    }
    return output;
};

// Do not edit below this line
module.exports = repeatString;
