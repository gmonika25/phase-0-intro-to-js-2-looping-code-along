// Code your solutions in this file
for (let age = 30; age < 40; age++) {
  console.log(`I'm ${age} years old. Happy birthday to me!`);
  // debugger;
}

const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
  for (let i = 0; i < gifts.length; i++) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
    debugger;
  }
  return gifts;
}

// wrapGifts(gifts);

const writeCards = function (arr, holiday) {
  const greetingArray = [];
  for (let i = 0; i < arr.length; i++) {
    greetingArray.push(
      `Thank you, ${arr[i]}, for the wonderful ${holiday} gift!`
    );
  }

  return greetingArray;
};

console.log(writeCards(["Charlie", "Samip", "Ali"], "birthday"));

const countDown = function () {
  let count = 10;
  while (count > -1) {
    console.log(count--);
  }
};

countDown();
