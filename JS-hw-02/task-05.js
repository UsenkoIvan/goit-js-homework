const checkForSpam = function (string) {
    const arr = string.toLowerCase();
    const array = arr.split(' ');
    console.log(array)
    for (const word of arr) {
        if (array.includes('sale') || array.includes('[spam]')) {
            return true
        }
        return false;
    }
}

// const checkForSpam = function (string) {
//     const str = string.toUpperCase();
//     if (str.indexOf("SPAM") + 1 || str.indexOf("SALE") + 1) {
//         return true;
//     }
//     return false;
// };

console.log(checkForSpam('Latest technology news')); // false
console.log(checkForSpam('JavaScript weekly newsletter')); // false
console.log(checkForSpam('Get best sale offers now!')); // true
console.log(checkForSpam('[SPAM] How to earn fast money?')); // true