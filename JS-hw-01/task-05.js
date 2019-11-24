const CHINA = 'китай';
const CHILE = 'чили';
const AUSTRALIA = 'австралия';
const INDIA = 'индия';
const JAMAICA = 'ямайка';
let userChoise = prompt('В яку країну доставляти?');
let messeage;
if(userChoise === null){
  alert('Відмінено');
} else {
  switch(userChoise.toLowerCase()){
  case CHINA:
    messeage = 'Доставка в Китай будет стоить 100 кредитов';
  break;
  case CHILE:
    messeage = 'Доставка в Чили будет стоить 250 кредитов';
  break;
  case AUSTRALIA:
    messeage = 'Доставка в Австралію будет стоить 170 кредитов';
  break;
  case INDIA:
    messeage = 'Доставка в Індію будет стоить 80 кредитов';
  break;
  case JAMAICA:
    messeage = 'Доставка в Ямайку будет стоить 120 кредитов';
  break;
  default:
        alert('В вашей стране доставка не доступна');
 };
}
console.log(messeage);