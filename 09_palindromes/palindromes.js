const palindromes = function () {
    let rawString = Array.from(arguments).toString().toLowerCase().replace(/[^a-z]/g, '');
    return (rawString === rawString.split('').reverse().join(''));
};

// Do not edit below this line
module.exports = palindromes;
