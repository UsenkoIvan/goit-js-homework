// Счетчик состоит из спана и кнопок, которые должны увеличивать и уменьшать значение счетчика на 1.

// Создай переменную counterValue в которой будет хранится текущее значение счетчика.
// Создай функции increment и decrement для увеличения и уменьшения значения счетчика
// Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса

let counterValue = 0;
const spanValue = document.querySelector('#value');
// console.log(counterValue);
const increment = document.querySelector('button[data-action="increment"]');
// console.log(increment);
const decrement = document.querySelector('button[data-action="decrement"]');
// console.log(decrement);

increment.addEventListener('click', (e) => {
    counterValue += 1;
    return spanValue.textContent = counterValue;
});

decrement.addEventListener('click', (e) => {
    counterValue -= 1;
    return spanValue.textContent = counterValue;
});