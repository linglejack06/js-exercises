const palindromes = function (phrase) {
    let simplePhrase = phrase.toLowerCase().replace(/\W/g, '');
    let strArray = simplePhrase.split('').reverse();
    let reversePhrase = strArray.join('');
    return reversePhrase === simplePhrase;

};
console.log(palindromes("Hi my name is Jack. I'm cool."));
// Do not edit below this line
module.exports = palindromes;
