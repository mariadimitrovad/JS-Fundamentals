function solve(arr, rotations){

for(let rotation = 1; rotation <= rotations; rotation++){
  let removedElement = arr.shift();

  arr.push(removedElement);

}
console.log(arr.join(' '));
}
solve([51, 47, 32, 61, 21], 2);

/*функция, която получава масив и броя завъртания, които трябва да извършите.

В зависимост от броя на завъртанията, първият елемент отива до края.

Отпечатайте получените елементи на масива, разделени с един интервал.*/