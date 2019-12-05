const formatString = function (string) {
    const maxLength = 40;
    if (string.length < maxLength) {
        return string;
    } else if (string.length > maxLength) {
        return string.slice(0, 40) + ' ...';
    }
}
console.log(formatString('Curabitur ligula sapien, tincidunt non.'));
console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'));
console.log(formatString('Curabitur ligula sapien.'));
console.log(formatString('Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.'));


// const formatString = (string, maxLength = 40) =>
// string.length > maxLength ? `${string.slice(0, maxLength - 1)}...` : string;
// console.log(formatString('Curabitur ligula sapien, tincidunt non.'));
// console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'));
// console.log(formatString('Curabitur ligula sapien.'));
// console.log(formatString('Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.'));