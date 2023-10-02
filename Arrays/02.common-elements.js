function solve(arr1, arr2){
  
for(let elements of arr1){
  if(arr2.includes(elements)){
    console.log(elements);
  }
}
}
solve(
['Hey', 'hello', 2, 4, 'Peter', 'e'],
['Petar', 10, 'hey', 4, 'hello', '2']
);

/*Напишете функция, която отпечатва общи елементи в два низови масива. Отпечатайте всички съвпадения на отделни редове. Сравнете първия масив с втория масив.*/