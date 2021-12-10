// Create and display Brackets

//Global Variables
const nPlayers = parseInt(document.getElementById("tournament-size").innerHTML);
const organizer = jQuery.isEmptyObject(
  document.getElementsByTagName("p")[0].innerHTML.slice(9)
)
  ? ""
  : document.getElementsByTagName("p")[0].innerHTML.slice(9);

const registeredPlayers = document
  .querySelector("#registeredPlayers")
  .innerHTML.split(",");
tournamentBrackets = document.querySelector(".tournament-brackets");
tournamentHeaders = document.querySelector(".tournament-headers");
let listItem = null;
let playerContainer = null;
let nBrackets = null;

/////////////////////////////////////////////////////////////////////////////////

//Set headers according to the number of Rounds
function buildHeaders() {
  nBrackets = getBaseLog(2, parseInt(nPlayers)) + 1;

  console.log(registeredPlayers);

  for (let i = 1; i < nBrackets; i++) {
    header = document.createElement("h3");
    tournamentHeaders.appendChild(header);
  }

  headersList = tournamentHeaders.getElementsByTagName("h3");
  console.log("Headers", headersList);

  if (nPlayers === 32) {
    headersList[1].innerHTML = "Round of 16";
    headersList[2].innerHTML = "Quarter-Finals";
    headersList[3].innerHTML = "Semi-Finals";
    headersList[4].innerHTML = "Final";
    headersList[5].innerHTML = "Champion";
  } else if (nPlayers === 16) {
    headersList[1].innerHTML = "Quarter-Finals";
    headersList[2].innerHTML = "Semi-Finals";
    headersList[3].innerHTML = "Final";
    headersList[4].innerHTML = "Champion";
  } else if (nPlayers === 8) {
    headersList[1].innerHTML = "Semi-Finals";
    headersList[2].innerHTML = "Final";
    headersList[3].innerHTML = "Champion";
  } else if (nPlayers === 4) {
    headersList[1].innerHTML = "Final";
    headersList[2].innerHTML = "Champion";
  }
}

//Build brackets also according to the number of rounds
function buildBrackets(numberOfPlayers) {
  for (let i = 0; i < nBrackets; i++) {
    unorderedList = document.createElement("ul");
    unorderedList.className = "bracket bracket-" + (i + 1);
    tournamentBrackets.appendChild(unorderedList);
  }
}

// Calculate the number of rounds according to the maximum number of registered players
function getBaseLog(x, y) {
  nBrackets = Math.log(y) / Math.log(x);
  return nBrackets;
}

//Create li elements, anchor tags and paragraphs to receive the registered players
function buildFirstRound() {
  const firstBracket = document.getElementsByClassName("bracket-1")[0];

  firstBracket.innerHTML = "";

  for (let i = 1; i <= nPlayers / 2; ++i) {
    listItem = document.createElement("li");
    listItem.className = "team-item";
    firstBracket.appendChild(listItem);

    populateLi();
  }
  populatePlayers(registeredPlayers);
}
// Create li elements, anchor tags and paragraphs to receive winners from previous round
function buildSecondRound() {
  const secondBracket = document.getElementsByClassName("bracket-2")[0];

  secondBracket.innerHTML = "";

  for (let i = 1; i <= nPlayers / 4; ++i) {
    listItem = document.createElement("li");
    listItem.className = "team-item";
    secondBracket.appendChild(listItem);
    populateLi();
  }
}

//Create li elements, anchor tags and paragraphs to receive winners from previous round
function buildThirdRound() {
  if (document.getElementsByClassName("bracket-3")[0]) {
    const thirdBracket = document.getElementsByClassName("bracket-3")[0];

    thirdBracket.innerHTML = "";

    for (let i = 1; i <= nPlayers / 8; ++i) {
      listItem = document.createElement("li");
      listItem.className = "team-item";
      thirdBracket.appendChild(listItem);
      populateLi();
    }
  }
}
//Create li elements, anchor tags and paragraphs to receive winners from previous round
function buildFourthRound() {
  if (document.getElementsByClassName("bracket-4")[0]) {
    const fourthBracket = document.getElementsByClassName("bracket-4")[0];

    fourthBracket.innerHTML = "";

    for (let i = 1; i <= nPlayers / 16; ++i) {
      listItem = document.createElement("li");
      listItem.className = "team-item";
      fourthBracket.appendChild(listItem);
      populateLi();
    }
  }
}
//Create li elements, anchor tags and paragraphs to receive winners from previous round
function buildFifthRound() {
  if (document.getElementsByClassName("bracket-5")[0]) {
    const fifthBracket = document.getElementsByClassName("bracket-5")[0];

    fifthBracket.innerHTML = "";

    for (let i = 1; i <= nPlayers / 32; ++i) {
      listItem = document.createElement("li");
      listItem.className = "team-item";
      fifthBracket.appendChild(listItem);
      populateLi();
    }
  }
}
//Create champion tag
function buildChampion() {
  console.log(nBrackets);
  const lastBracket = document.getElementsByClassName("bracket")[nBrackets - 1];

  lastBracket.innerHTML = "";

  listItem = document.createElement("li");
  listItem.className = "team-item";
  lastBracket.appendChild(listItem);

  if (organizer != "") {
    let anchor = document.createElement("a");
    listItem.appendChild(anchor);
    anchor.href = "#";
    anchor.className = "select-winner winner";
    anchor.id = "winner";
    playerContainer = document.createElement("p");
    playerContainer.className = "players";
    anchor.appendChild(playerContainer);
  } else {
    playerContainer = document.createElement("p");
    playerContainer.className = "players";
    listItem.appendChild(playerContainer);
  }
}
//Used to create LIs, anchor tags, paragraphs and text element
function populateLi() {
  if (organizer !== "") {
    for (let i = 1; i <= 2; i++) {
      let anchor = document.createElement("a");
      listItem.appendChild(anchor);
      anchor.href = "#";
      // anchor.className = "select-winner";
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
//Populate players into the first Bracket
function populatePlayers(listOfPlayers) {
  const players = document.getElementsByClassName("players");
  const anchor = document.getElementsByTagName("a");

  for (
    let i = 0;
    i <
    (registeredPlayers.length > nPlayers ? nPlayers : registeredPlayers.length);
    i++
  ) {
    players[i].innerHTML = registeredPlayers[i];
    if (organizer !== "") {
      anchor[i + 1].className = "select-winner";
    }
  }
}
//Receives the selected player (Winner) from the previous round and populate the next round
function populateNextBracket(target) {
  nextBracket =
    target.parentElement.parentElement.nextElementSibling.className.slice(8);

  winner = target.querySelector(".players").innerHTML;

  winnerIndex = $(target.parentElement).index();

  const players = document
    .querySelector("." + nextBracket)
    .getElementsByClassName("players");

  const anchors = document
    .querySelector("." + nextBracket)
    .getElementsByTagName("a");

  players[winnerIndex].innerHTML = winner;
  anchors[winnerIndex].className = "select-winner";
}

//Event handler to allow selection of the winner.
$(document).on("click", ".select-winner", function (e) {
  e.preventDefault();
  if ($(e.target).siblings().hasClass("winner")) {
    $(e.target).siblings().removeClass("winner");
    e.target.classList.toggle("winner");
  } else {
    e.target.classList.toggle("winner");
    console.log(e.target.querySelector(".players").innerHTML);
  }
  console.log($(this.parentElement).index());
  populateNextBracket(e.target);
});

//start building the page
function buildRounds() {
  buildHeaders();
  buildBrackets(nPlayers);
  buildFirstRound();
  buildSecondRound();
  buildThirdRound();
  buildFourthRound();
  buildFifthRound();
  buildChampion();
}

window.addEventListener("load", buildRounds, false);
