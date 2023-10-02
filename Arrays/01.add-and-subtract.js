function solve(arr){
let newArray = [];
let originalArraySum = 0;
let newArraySum = 0;

for(let i = 0; i < arr.length; i++){
  let curNum = arr[i];
  originalArraySum += curNum;

  if(curNum % 2 == 0){
    curNum += i;
  } else {
    curNum -= i;
  }

 newArray.push(curNum);
 newArraySum += curNum;
}

console.log(newArray);
console.log(originalArraySum);
console.log(newArraySum);
}
solve([5, 15, 23, 56, 35]);

/*Напишете функция, която променя стойността на нечетни и четни числа в масив от числа.
• Ако числото е четно - добавете към стойността му индексната му позиция
• Ако числото е нечетно - от стойността му се изважда позицията на индекса

На първия ред отпечатайте новопроменения масив, на втория ред отпечатайте сумата на числата от оригиналния масив, на третия ред отпечатайте сумата на числата от модифицирания масив.*/
