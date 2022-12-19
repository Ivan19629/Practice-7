import getValidEmails from './moduls/getValidEmails.js';

let allList = ['omega1@mail.ru', 'omega2@mail.ru', 'omega3@mail.ru', 'omega4@mail.ru', 'omega5@mail.ru', 'omega6@mail.ru', 'omega7@mail.ru', 'omega8@mail.ru', 'omega9@mail.ru',
 'omega10@mail.ru', 'omega11@mail.ru', 'omega12@mail.ru', 'omega13@mail.ru', 'omega14@mail.ru', 'omega15@mail.ru', 'omega16@mail.ru', 'omega17@mail.ru'];


let blackList = ['omega18@mail.ru', 'omega19@mail.ru', 'omega20@mail.ru', 'omega21@mail.ru', 'omega22@mail.ru', 'omega23@mail.ru', 'omega24@mail.ru'];
 
console.log(getValidEmails(allList, blackList));
  
