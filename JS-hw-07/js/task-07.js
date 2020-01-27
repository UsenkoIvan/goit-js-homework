// Напиши скрипт, который реагирует на изменение значения input#font-size-control (событие input) 
// и изменяет инлайн-стиль span#text обновляя свойство font-size. 
// В результате при перетаскивании ползунка будет меняться размер текста.

const refs = {
    input: document.querySelector('#font-size-control'),
    text: document.querySelector('#text'),
}
// console.log(refs.text);

refs.input.addEventListener('input', changeFontSize);

function changeFontSize() {
    let size = event.currentTarget.value;
    refs.text.style.fontSize = `${size}px`;
}