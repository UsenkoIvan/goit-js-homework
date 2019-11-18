const credits = 23580;
const pricePerDroid = 3000;
const input = prompt('Скільки дронів Ви бажаєте купити?');
const totalPrice = 3000 * Number(input);
const totalCredits = credits - totalPrice;
if (input === null) {
    console.log('Отменено пользователем!');
} else if (totalPrice > credits) {
    console.log('Недостаточно средств на счету!')
} else if (credits - totalPrice > 0) {
    console.log(`Вы купили ${input} дроидов, на счету осталось ${totalCredits} кредитов.`)
}