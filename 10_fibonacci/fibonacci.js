const fibonacci = function(a) {
    let n = parseInt(a);
    if (n < 0 || isNaN(n)) {
        return 'OOPS';
    }
    if (n === 0) {
        return 0;
    }
    let series = [];
    for (let i = 0; i < n; i++) {
        if (i === 0) {
            series[i] = 1;
        } else if (i === 1) {
            series[i] = 1;
        } else {
            series[i] = series[i - 2] + series[i - 1];
        }
    }
    return series[n-1];
};

// Do not edit below this line
module.exports = fibonacci;
