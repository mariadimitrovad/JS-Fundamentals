function solve(arr){
  let rommsInfo = arr[0];
  let rooms = rommsInfo.split('|');

  let health = 100;
  let coins = 0;

  let bestRoom = 1;

  for(let room of rooms){
    let tokens = room.split(' ');
    let command = tokens[0];
    let num = Number(tokens[1]);

    if(command == 'potion'){
      let newHp = health + num <= 100 ? num : 100 - health;
      health += newHp;
      console.log(`You healed for ${newHp} hp.`);
      console.log(`Current health: ${health} hp.`);
    } else if (command == 'chest'){
      coins += num;
      console.log(`You found ${num} coins.`);
    } else {
      health -= num;
    }

• Във всеки друг случай, вие сте изправени пред чудовище, ще се биете.
Втората част на стаята съдържа атаката на чудовището, а първата - името на чудовището. Трябва да премахнете атаката на чудовището от вашето здраве.
o Ако не сте мъртъв (здраве > 0), вие сте убили чудовището и трябва да отпечатате:
„Вие убихте {monster-name}.“
o Ако сте умрели, отпечатайте: `Ти умря! Убит от {monster-name}.` и вашата мисия приключи.
Отпечатайте най-добрата стая, която можете да достигнете: „Най-добра стая: {room}“.
• Ако сте успели да преминете през всички стаи в подземието, отпечатайте на следващите три реда:
— Успяхте!
 „Монети: {coins}“
 „Здраве: {здраве}“
      console.log(`You slayed ${command}.`);

    bestRoom++;
  }

  if(health > 0){
    console.log(`You've made it!`);
    console.log(`Coins: ${coins}`);
    console.log(`Health: ${health}`);
  }
}
solve(["rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000"]);
