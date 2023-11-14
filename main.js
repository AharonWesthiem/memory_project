let container = document.querySelector(".container");
let card = document.querySelectorAll(".card");

let numOfCard = 16;

function duobledArray() {
  const duobl = [];
  for (i = 1; i <= numOfCard; i++) {
    duobl.push(i);
    duobl.push(i);
  }
  return duobl;
}
function randomize(values) {
  let index = values.length;
  let randomIndex;

  // While there remain elements to shuffle.
  while (index != 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * index);
    index--;

    // And swap it with the current element.
    [values[index], values[randomIndex]] = [values[randomIndex], values[index]];
  }

  return values;
  // return unsort
  // return duobl
}

let cards = duobledArray();
console.log(cards);
randomize(cards)

console.log(cards);

cards[


// console.log(randomize(duobledArray()));

for (let i = 0; i < numOfCard; i++) {
  const div = document.createElement("div");
  div.className = "card";
  div.setAttribute("data-card", cards[i]);

  div.addEventListener("click", function () {
    div.className = "cardFlip";
  });

  container.appendChild(div);
}
// `card.addEventListener("click",function (){
//     alert()
// })`
