var RandnumStorage = {
  initRand: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  userHit: [],
  dealerHit: [],
  currRnd: [],
  userTotalCardValue: 0,
  dealerTotalCardValue: 0,
};


var functionState = {
  cardDist: false,
  count: 0,
  DisplayState: "init"
};



var domEvents = {
  bet_value: document.getElementById("bet-value"),
    balance:document.getElementById("balance"),
  dealerCard: document.getElementById("dealer"),
  playerCard: document.getElementById("player"),
  image : document.createElement("IMG")
};


