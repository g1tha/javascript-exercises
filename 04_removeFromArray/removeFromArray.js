const removeFromArray = function() {
    let args = Array.from(arguments);
    return args[0].filter(val => !args.includes(val));
};

// Do not edit below this line
module.exports = removeFromArray;
