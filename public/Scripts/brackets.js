// Create and display Brackets

let listOfPlayers = [
  "Nick",
  "Bruno",
  "Adriano",
  "Roman",
  "Alex",
  "Kevin",
  "Adam",
  "Matt",
  "Evan",
  "Abby",
  "Heather",
  "Christina",
  "Ryan",
  "Tyler",
  "Steve",
  "Steph",
  "Jenna",
  "Derek",
  "Mike",
  "Sam",
  "Lucas",
  "Rita",
  "Aderson",
  "Sayed",
  "Carlos",
  "Derek",
  "Eva",
  "Bill",
  "Martha",
  "Angela",
  "Julia",
  "Amanda",
];
//Global Variables
const nMatches = parseInt(document.getElementById("tournament-size").innerHTML);
const organizer = jQuery.isEmptyObject(
  document.getElementsByTagName("p")[0].innerHTML.slice(9)
)
  ? ""
  : document.getElementsByTagName("p")[0].innerHTML.slice(9);

function buildFirstRound() {
  const firstBracket = document.getElementsByClassName("bracket-1")[0];
  let listItem = null;
  let playerContainer = null;

  firstBracket.innerHTML = "";

  for (let i = 1; i <= nMatches / 2; ++i) {
    listItem = document.createElement("li");
    listItem.className = "team-item";
    firstBracket.appendChild(listItem);

    if (organizer != "") {
      for (let i = 1; i <= 2; i++) {
        let anchor = document.createElement("a");
        listItem.appendChild(anchor);
        anchor.href = "#";
        anchor.className = "select-winner";
        playerContainer = document.createElement("p");
        playerContainer.className = "players";
        anchor.appendChild(playerContainer);
      }
    } else {
      for (let i = 1; i <= 2; ++i) {
        playerContainer = document.createElement("p");
        playerContainer.className = "players";
        listItem.appendChild(playerContainer);
      }
    }
    const versus = document.createTextNode("VS");
    listItem.insertBefore(versus, listItem.childNodes[1]);
  }
  populatePlayers(listOfPlayers);
}

function buildSecondRound() {
  const secondBracket = document.getElementsByClassName("bracket-2")[0];
  let listItem = null;
  let playerContainer = null;

  secondBracket.innerHTML = "";

  for (let i = 1; i <= nMatches / 4; ++i) {
    listItem = document.createElement("li");
    listItem.className = "team-item";
    secondBracket.appendChild(listItem);
    for (let i = 1; i <= 2; ++i) {
      playerContainer = document.createElement("p");
      playerContainer.className = "players";
      listItem.appendChild(playerContainer);
    }
  }
  //   populatePlayers(listOfPlayers);
}

function populatePlayers(listOfPlayers) {
  const players = document.getElementsByClassName("players");

  for (let i = 0; i < nMatches; ++i) {
    players[i].innerHTML = listOfPlayers[i];
  }
}

$(document).on("click", ".select-winner", function (e) {
  //   if (e.target.siblings.classList.contains("winner")) {
  // e.target.siblings.classList.remove("winner");
  e.target.classList.toggle("winner");
  //   }
  console.log(e.target);
});

// const anchors = document.getElementsByTagName("a");
// console.log(anchors);
// for (let a of anchors) {
//   a.addEventListener("click", onSelect);
// }

// function onSelect(event) {
//   event.preventDefault();
//   console.log(event.target);
// }

// const listOfLinks = document.querySelectorAll("a");

// console.log(listOfLinks);

// listOfLinks.forEach((i) => {
//   i.addEventListener(
//     "click",
//     (e) => {
//       console.log(e.target);
//       const clickedButtonIndex = [...listOfLinks].indexOf(e.target.tagName);
//       console.log(listOfLinks[clickedButtonIndex]);
//       listOfLinks[clickedButtonIndex].classList.toggle("select-winner");
//     },
//     false
//   );
// });

function buildRounds() {
  buildFirstRound();
  buildSecondRound();
}

window.addEventListener("load", buildRounds, false);
