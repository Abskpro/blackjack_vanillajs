 class computer{
  constructor(player_total, dealer_total) {
    this.pt = player_total;
    this.dt = dealer_total;
  }
  make_move() {
    this.dt < 17 && this.pt > this.dt && this.dt <= 21
      ? (console.log("hit that shit"),
        randCalc(2),
        assignCards(0),
        hitstand.standPressed())
      : console.log("abort do not hit");
    this.final_decision();
  }
  final_decision() {
    console.log(domEvents.bet_value.innerHTML);
    console.log(this.pt, this.dt);
      document.querySelector(".next").style.visibility = "visible";
      if(this.pt > this.dt){
          console.log("player wins the game");
      }
      else{
          console.log("dealer wins the game");
      }
  }
};



