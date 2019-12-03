let input;
const numbers = [];
let total = 0;

do {
    input = Number(prompt('Enter number'));
    numbers.push(input);
    console.log(numbers);
} while (input !== null && input !== 0) {
    for (const sum of numbers) {
        if (Number.isNaN(sum)) {
            alert('Было введено не число, попробуйте еще раз');
        } else {
            total += sum;
        };
    }
};

console.log(`Общая сумма чисел равна ${total}`);