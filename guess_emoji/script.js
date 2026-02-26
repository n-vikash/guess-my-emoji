"use strict";
const emojis = [
  "😂",
  "🤣",
  "😊",
  "😘",
  "😍",
  "😒",
  "👍",
  "❤️",
  "😎",
  "😢",
  "😜",
  "😁",
  "🤗",
  "🤩",
  "🤨",
  "😏",
  "🥱",
  "😶‍🌫️",
  "🤐",
];

function random_arr(x, emojis, num) {
  let i = 0;
  const arr = [];
  while (i < x) {
    if (!arr.includes(emojis[num])) {
      arr[i] = emojis[num];
      i++;
    } else {
      num = Math.trunc(Math.random() * emojis.length);
    }
  }

  return arr;
}
let random_show = random_arr(
  5,
  emojis,
  Math.trunc(Math.random() * emojis.length),
);
document.querySelector(".arr").textContent = random_show;

//cheking

let moj = Math.trunc(Math.random() * random_show.length);
document.querySelector(".number").textContent = random_show[moj];
let cnt = 2;

document.querySelector(".check").addEventListener("click", function () {
  const msg = document.querySelector(".message");
  const score = document.querySelector(".score");
  const guess = document.querySelector(".guess").value;

  if (random_show.includes(guess)) {
    if (cnt != 0) {
      if (random_show[moj] == guess) {
        msg.textContent = "correct emoji";
        score.textContent = cnt == 2 ? "fantastic" : "good";
        document.body.style.backgroundColor = "green";
      } else {
        msg.textContent = "lastchance";
        cnt--;
        console.log(cnt);
      }
    } else {
      msg.textContent = "your out of chnaces";
      document.body.style.backgroundColor = "red";
    }
  } else {
    msg.textContent = "huh..only those 5 emojis are allowed,choose in them";
  }
});
document.querySelector(".again").addEventListener("click", () => {
  document.querySelector(".message").textContent = "Start Guessing....";
  document.querySelector(".score").textContent = "hello";
  document.body.style.backgroundColor = "#222";
  cnt = 2;
  moj = Math.trunc(Math.random() * random_show.length);
});
