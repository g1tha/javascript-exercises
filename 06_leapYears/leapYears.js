const leapYears = function(x) {
    return ((x % 4 === 0) && !(x % 100 === 0)) || (x % 400 === 0);
}
// Do not edit below this line
module.exports = leapYears;
