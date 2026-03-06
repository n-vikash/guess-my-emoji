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
  "💕",
  "🫠",
  "😭",
  "🤯",
  "🥵",
  "🥶",
  "😱",
  "😨",
  "😵",
  "😷",
  "🤧",
  "🥸",
  "🥳",
  "👿",
  "👽",
  "👻",
  "☠️",
  "👾",
  "🙀",
  "🤦",
  "👌",
  "👎",
  "👊",
  "🤟",
];
// creation of emojies array
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
//random creation
document.querySelector(".again").textContent = "SELECT A LEVEL";
document.querySelector(".show-level").textContent = "CHOOSE A LEVEL";
let random_show = random_arr(
  0,
  emojis,
  Math.trunc(Math.random() * emojis.length),
);
//hiding level menu bar

const menu = document.querySelector(".level-menu");
menu.classList.add("hidden");

let cnt = 2;

// taking elements
const msg = document.querySelector(".message");
const score = document.querySelector(".score");
const chance = document.querySelector(".chance");

//checking
document.querySelector(".check").addEventListener("click", function () {
  chance.textContent = "";
  const guess = document.querySelector(".guess").value;

  if (random_show.includes(guess)) {
    if (cnt > 0) {
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

// again menu bar

document.querySelector(".again").addEventListener("click", () => {
  menu.classList.remove("hidden");
});

//easy level
document.querySelector(".easy").addEventListener("click", function () {
  document.querySelector(".again").textContent = "Again ?";
  clickarr(3, 5);
});

//normal level
document.querySelector(".normal").addEventListener("click", function () {
  document.querySelector(".again").textContent = "Again ?";
  clickarr(2, 7);
});

//hard level
document.querySelector(".hard").addEventListener("click", function () {
  document.querySelector(".again").textContent = "Again ?";
  clickarr(2, 10);
});

function clickarr(c, len) {
  menu.classList.add("hidden");
  chances(len);
  let random_show = random_arr(
    len,
    emojis,
    Math.trunc(Math.random() * emojis.length),
  );
  let moj = Math.trunc(Math.random() * random_show.length);
  document.querySelector(".arr").textContent = random_show;
  document.querySelector(".message").textContent = "Start Guessing....🤔";
  document.querySelector(".score").textContent = "hello";
  document.body.style.backgroundColor = "#222";
  cnt = c;
}

// showing chances
function chances(len) {
  if (len == 5) {
    chance.textContent = "You have three chnaces to find";
    document.querySelector(".show-level").textContent = "LEVEL: EASY";
  } else if (len == 7) {
    chance.textContent = "You have two chnaces to find";
    document.querySelector(".show-level").textContent = "LEVEL: HARD";
  } else {
    chance.textContent = "You have two chnaces to find";
    document.querySelector(".show-level").textContent = "LEVEL: HARD";
  }
}
