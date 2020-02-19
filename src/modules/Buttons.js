var hitstand = {
  eval: e => {
      let targetValue = e.target.innerHTML;
    targetValue != "STAND" ? hitstand.hitPressed() : hitstand.standPressed();
  },

  hitPressed: () => {
    functionState.DisplayState = "player";
    randCalc(0);
    assignCards(0);
  },

  standPressed: () => {
    functionState.DisplayState = "dealer";
      document.getElementById("hit-stand").style.visibility="hidden";
    var init = new computer(
      RandnumStorage.userTotalCardValue,
      RandnumStorage.dealerTotalCardValue
    );
      console.log(init,RandnumStorage.dealerTotalCardValue);
    init.make_move();
  }
};

