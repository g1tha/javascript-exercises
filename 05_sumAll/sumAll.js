const sumAll = function(x, y) {
    if (!(x > 0) || !(y > 0) || !Number.isInteger(x) || !Number.isInteger(y)) {
        return "ERROR";
    }
    let result = 0;
    for (let i = Math.min(x,y); i <= Math.max(x,y); i++) {
        result += i;
    }
    return result;

};

// Do not edit below this line
module.exports = sumAll;
