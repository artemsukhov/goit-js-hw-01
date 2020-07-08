let userInput = prompt('Укажите страну доставки');
let message;
const china = 'китай';
const chinaCost = 100;
const chili = 'чили';
const chiliCost = 250;
const australia = 'австралия';
const australiaCost = 170;
const india = 'индия';
const indiaCost = 80;
const jamaica = 'ямайка';
const jamaicaCost = 120;

switch (userInput.toLocaleLowerCase()) {
  case china:
    message = `Доставка в ${china} будет стоить ${chinaCost} кредитов`;
    break;
  case chili:
    message = `Доставка в ${chili} будет стоить ${chiliCost} кредитов`;
    break;
  case australia:
    message = `Доставка в ${australia} будет стоить ${australiaCost} кредитов`;
    break;
  case india:
    message = `Доставка в ${india} будет стоить ${indiaCost} кредитов`;
    break;
  case jamaica:
    message = `Доставка в ${jamaica} будет стоить ${jamaicaCost} кредитов`;
    break;

  default:
    alert('В вашей стране доставка не доступна');
}

console.log(message);


// Пользователь может оформить доставку товара к себе в страну, указав ее при посещении страницы в prompt. 
// Учти, пользователь может ввести имя страны не только буквами нижнего регистра, а к примеру 'кИтАЙ'.

// Напиши скрипт который выводит сообщение о стоимости доставки в указанную страну. 
// Обязательно используй switch. Формат сообщения: 'Доставка в [страна] будет стоить [цена] кредитов'.

// Но доставка есть не везде, если указанной страны нет в списке, то выводи в alert сообщение 
//'В вашей стране доставка не доступна'.

// Ниже приведен список стран и стоимость доставки.

// Китай - 100 кредитов
// Чили - 250 кредитов
// Австралия - 170 кредитов
// Индия - 80 кредитов
// Ямайка - 120 кредитов