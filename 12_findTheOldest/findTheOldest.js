const findTheOldest = function(array) {
    const sortedbyAge = array.sort(compareAge);
    return sortedbyAge[0];
};

function compareAge(a, b) {
    let ageA;
    let ageB;
    if ('yearOfDeath' in a) {
        ageA = a.yearOfDeath - a.yearOfBirth;
    } else {
        ageA = (new Date()).getFullYear() - a.yearOfBirth;
    }
    if ('yearOfDeath' in b) {
        ageB = b.yearOfDeath - b.yearOfBirth;
    } else {
        ageB = (new Date()).getFullYear() - b.yearOfBirth;
    }
    return ageA > ageB ? -1 : 1;
}

// Do not edit below this line
module.exports = findTheOldest;
