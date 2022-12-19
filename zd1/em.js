import getValidEmails from './moduls/getValidEmails.js';

let allList = ['omega1@mail.ru', 'omega2@mail.ru', 'omega3@mail.ru', 'omega4@mail.ru', 'omega5@mail.ru', 'omega6@mail.ru', 'omega7@mail.ru', 'omega8@mail.ru', 'omega9@mail.ru',
 'nemail1@mail.ru', 'nemail2@mail.ru', 'nemail3@mail.ru', 'nemail4@mail.ru', 'nemail5@mail.ru', 'nemail6@mail.ru', 'nemail7@mail.ru'];

let blackList = ['omega11@mail.ru', 'omega12@mail.ru', 'omega13@mail.ru', 'omega14@mail.ru', 'omega15@mail.ru', 'omegal6@mail.ru', 'omegal7@mail.ru'];
 
console.log(getValidEmails(allList, blackList));
  
