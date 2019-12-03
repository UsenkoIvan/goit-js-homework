let input;
let total = 0;
do {
  input = Number(prompt('Enter number'));
  total += input
  console.log(total);
} while (input !== 0){
  alert(`Общая сумма чисел равна ${total}`);
}