const repeatString = function(word, num) {
    if (num < 0) {
        return 'ERROR';
    }
    let repeated = ''
    for (num > 0; num--;) {
        repeated += word;
    }
    return repeated;
};

// Do not edit below this line
module.exports = repeatString;
