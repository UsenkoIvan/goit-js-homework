// Напиши скрипт который, при наборе текста в инпуте input#name-input (событие input),
//  подставляет его текущее значение в span#name-output.
// Если инпут пустой, в спане должна отображаться строка 'незнакомец'.

const refs = {
  input: document.querySelector('#name-input'),
  span: document.querySelector('#name-output'),
};

console.log(refs.span);

refs.input.addEventListener('input', e => {
  const input = refs.input;
  const span = refs.span;
  if (input.value) {
    span.innerHTML = input.value;
  } else {
    span.innerHTML = 'незнакомец';
  }
});
