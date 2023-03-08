const findTheOldest = function(array) {
    return array.reduce((oldest, current) => {
        let oldestAge;
        if(oldest.yearOfDeath) { 
            oldestAge = oldest.yearOfDeath - oldest.yearOfBirth;
        } else {
            oldestAge = new Date().getFullYear() - oldest.yearOfBirth;
        }let currentAge;
        if(current.yearOfDeath) { 
            currentAge = current.yearOfDeath - current.yearOfBirth;
        } else {
            currentAge = new Date().getFullYear() - current.yearOfBirth;
        }
        return oldestAge < currentAge ? current : oldest;
    })
};

// Do not edit below this line
module.exports = findTheOldest;
