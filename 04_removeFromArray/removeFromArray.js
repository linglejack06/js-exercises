const removeFromArray = function(arr, rmFromArray) {
    let args = Array.from(arguments).splice(1);
    for (let i = 0; i < args.length; i++) {
        let index = arr.indexOf(args[i]);
        if (index !== -1) {
            arr.splice(index, 1);
        };
    };
    return arr;
}
// Do not edit below this line
module.exports = removeFromArray;
