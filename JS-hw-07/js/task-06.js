// Напиши скрипт, который бы при потере фокуса на инпуте, 
// проверял его содержимое на правильное количество символов.

// Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
// Если введено подходящее количество, то border инпута становится зеленым, если неправильное - красным.
const inputLength = document.querySelector("#validation-input[data-length]");
const input = document.querySelector("#validation-input");

input.addEventListener('blur', inputDataSetLength);

function inputDataSetLength() {
    const setLength = Number(input.dataset.length);
    let enterLength = input.value.length;
    if (setLength === enterLength) {
        input.classList.add('valid');
        input.classList.remove('invalid')
    } else {
        input.classList.add('invalid')
    }
};