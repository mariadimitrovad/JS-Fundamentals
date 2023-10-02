function solve(arr, rotations){
for (let rotation = 1; rotation <= rotations; rotation++){
  let firstEl = arr.shift();
  arr.push(firstEl);
}
console.log(arr.join(' '));
}

let j = k;
solve([32, 21, 61, 1], 3);