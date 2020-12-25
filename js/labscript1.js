"use strict";

if (4 < 1){
     console.log('ok!');
}else {
console.log('error');

}

const num = 50;
if (num < 49) {
    console.log('Error');
}else if (num > 100) {
  console.log('Много');
} else {
    console.log('Ok!');
}

(num ==  50) ? console.log('Ok!') : console.log('error'); //Тернарный оператор.



const num = 60;
switch (num) {
      case 49:
            console.log('неверно');
            break;
        case 100:
            console.log('Неверно');
        case 50:
            console.log(' в точку!');
        break;
    default:
        console.log('не в этот раз');
        break;                    
}
