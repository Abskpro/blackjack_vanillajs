interface State {
  cardDist: boolean;
  count: number;
  display: string;
}

var Random = {
  initRand: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  userHit: [],
  dealerHit: [],
  currRnd: [],
  userTotalCardValue: 0,
  dealerTotalCardValue: 0,
  playerBalance: 100000,
  betValue: 0,
};

var Func: State = {
  cardDist: false,
  count: 0,
  display: 'init',
};

var domEvents = {
  bet_value: document.getElementById('bet-value'),
  balance: document.getElementById('balance'),
  dealerCard: document.getElementById('dealer'),
  playerCard: document.getElementById('player'),
  image: document.createElement('IMG'),
};

function randCalc(opt: string) {
  (document.querySelector(
    '.button-container',
  ) as HTMLElement).style.visibility = 'hidden';
  let reps: number = 4;
  let count: number = 0;
  function CalculateRand() {
    // generate random number each time the card is drawn
    let gen_rand: number = Math.floor(Math.random() * 13) + 1;
    // check if the same number is repeated more than four time as
    // deck of card can only have four cards of same value
    if (Random.initRand[gen_rand] > 4) {
      console.log(`value is at limit ${gen_rand}`);
      reps = reps + 1;
    } else {
      Random.initRand[gen_rand] = Random.initRand[gen_rand] + 1;
      opt === 'user'
        ? (Random.userHit.push(gen_rand), console.log(Random.userHit))
        : opt === 'init'
        ? (Random.currRnd.push(gen_rand), console.log(Random.currRnd))
        : (Random.dealerHit.push(gen_rand), console.log(Random.dealerHit));
    }
  }

  if (opt === 'init') {
    for (let i = 0; i < reps; i++) {
      CalculateRand();
    }
  } else {
    CalculateRand();
  }

  // if opt is init ie start game distibute 2 cards among each player
  if (Func.cardDist != true) {
    for (let i = 0; i < Random.currRnd.length; i++) {
      Func.count < 2
        ? ((Func.count = Func.count + 1),
          Random.userHit.push(Random.currRnd[i]),
          console.log(Random.userHit))
        : ((Func.count = Func.count + 1),
          Random.dealerHit.push(Random.currRnd[i]),
          console.log(Random.dealerHit));
    }
    Func.cardDist = true; //setting card has been distributed to each player
  }

  Random.userTotalCardValue = Random.userHit.reduce(sumFunc, 0);
  Random.dealerTotalCardValue = Random.dealerHit.reduce(sumFunc, 0);

  Func.display === 'init'
    ? displayCards.init()
    : Func.display === 'player'
    ? displayCards.player()
    : displayCards.dealer();

  function sumFunc(total: number, num: number) {
    return total + num;
  }
  console.log(Random.userTotalCardValue, Random.dealerTotalCardValue);
  console.log(Random.userHit, Random.dealerHit);
}

////////////////////////////////////////////////////////////////////////

class Init_Card_Process {
  image: HTMLElement; // typescript type to html image element
  currToInt: number;
  img?: string; //typescript type to url of image
  card: number;
  constructor(currToInt: number) {
    this.image = document.createElement('IMG');
    this.currToInt = currToInt;
    this.card = this.currToInt * 10 + Random.initRand[this.currToInt];
    this.img = `./src/assets/PNG/${this.card}.png`;
  }

  UserHit() {
    this.image.setAttribute('src', this.img);
    domEvents.playerCard.appendChild(this.image);
  }

  DealerHit() {
    this.image.setAttribute('src', this.img);
    domEvents.dealerCard.appendChild(this.image);
  }
}

class Game_Card_Process extends Init_Card_Process {
  constructor(currToInt) {
    super(currToInt);
  }
  BeginUserHit() {
    this.UserHit();
  }
  BeginDealerHit() {
    this.DealerHit();
  }
}

var displayCards = {
  init: () => {
    console.log('displaycard reached');
    Random.userHit.map(curr => {
      let currToInt: number = parseInt(curr);
      var player = new Init_Card_Process(currToInt);
      player.UserHit();
    });

    Random.dealerHit.map(curr => {
      let currToInt: number = parseInt(curr);
      var dealer = new Init_Card_Process(currToInt);
      dealer.DealerHit();
    });
  },

  player: () => {
    console.log('hit is pressed');
    console.log(Random.userHit, Random.dealerHit);
    let user_len: number = Random.userHit.length;
    let currToInt: number = Random.userHit[user_len - 1];
    let player_game_hit = new Game_Card_Process(currToInt);
    player_game_hit.BeginUserHit();
  },
  dealer: () => {
    console.log('stand is pressed');
    let dealer_len: number = Random.dealerHit.length;
    let currToInt: number = Random.dealerHit[dealer_len - 1];
    let dealer_game_hit = new Game_Card_Process(currToInt);
    dealer_game_hit.BeginDealerHit();
  },
};

// this is the logic part of the computter
// /////////////////////////////////////////////////////////
class computer {
  pt: number;
  dt: number;
  constructor(player_total: number, dealer_total: number) {
    this.pt = player_total;
    this.dt = dealer_total;
  }

  make_move() {
    console.log(this.pt, this.dt); //it is logging 0,0
    if (this.dt < 17 && this.pt > this.dt && this.dt <= 21) {
      console.log('hit that shit');
      randCalc('dealer');
      hitstand.standPressed();
    } else {
      console.log('abort do not hit');
      this.final_decision();
    }
  }

  final_decision() {
    console.log(domEvents.bet_value.innerHTML);
    console.log('final decision' + this.pt + this.dt);
    (document.querySelector('.next') as HTMLElement).style.visibility =
      'visible';
    if ((this.pt > this.dt && this.pt <= 21) || this.dt > 21) {
      setTimeout(() => {
        alert('player wins');
      }, 1000);
    } else if ((this.dt > this.pt && this.dt <= 21) || this.pt > 21) {
      setTimeout(() => {
        alert('dealer wins the game');
      }, 1000);
    } else {
      setTimeout(() => {
        alert('it is a push');
      }, 1000);
    }
  }
}

// this parts handle the hit or stand command
///////////////////////////////////////////////////////////
var hitstand = {
  eval: e => {
    let targetValue = e.target.innerHTML;
    targetValue != 'STAND' ? hitstand.hitPressed() : hitstand.standPressed();
  },

  hitPressed: () => {
    Func.display = 'player';
    randCalc('user');
  },

  standPressed: () => {
    Func.display = 'dealer';
    (document.querySelector(
      '.hit-stand-button',
    ) as HTMLElement).style.visibility = 'hidden';
    console.log(Random.dealerTotalCardValue);
    var init = new computer(
      Random.userTotalCardValue,
      Random.dealerTotalCardValue,
    );
    init.make_move();
  },
};

// this part handles the money
/////////////////////////////////////////////////////////
function bet(e) {
  let chipVal: number = parseInt(e.target.value);
  //adding the user money to the bet money
  Random.betValue = chipVal + Random.betValue;
  Random.playerBalance = Random.playerBalance - chipVal;
  handleEvent('moneyHandler');
}

// this is the event handler that that handle the event that should occur in the DOM
//////////////////////////////////////////////////////////////
function handleEvent(e: string) {
  switch (e) {
    case 'moneyHandler':
      document.querySelector('#balance').innerHTML = '' + Random.playerBalance;
      document.querySelector('#bet-value').innerHTML = '' + Random.betValue;
      break;

    case 'reset':
      console.log('reset');
      Random.playerBalance = Random.playerBalance + Random.betValue;
      Random.betValue = 0;
      document.querySelector('#balance').innerHTML = '' + Random.playerBalance;
      document.querySelector('#bet-value').innerHTML = '' + Random.betValue;
      break;

    case 'next':
      console.log('next is pressed');
      //for removing every cards from the player and dealer
      for (let x of Random.dealerHit) {
        domEvents.dealerCard.removeChild(domEvents.dealerCard.childNodes[0]);
      }

      for (let x of Random.userHit) {
        domEvents.playerCard.removeChild(domEvents.playerCard.childNodes[0]);
      }
      Random.dealerHit = [];
      Random.userHit = [];
      Random.currRnd = [];
      Random.betValue = 0;
      Func.cardDist = false;
      Func.count = 0;
      Func.display = 'init';

      //visbility
      (document.querySelector(
        '.button-container',
      ) as HTMLElement).style.visibility = 'visible';
      (document.querySelector('.next') as HTMLElement).style.visibility =
        'hidden';
      (document.querySelector(
        '.hit-stand-button',
      ) as HTMLElement).style.visibility = 'visible';
      break;

    default:
      console.log('hippdy hopidy your money is now my property');
  }
}

(() => {
  (document.querySelector('.next') as HTMLElement).style.visibility = 'hidden';
  document.querySelector('#money').addEventListener('click', bet, false);
  document.querySelector('.bet').addEventListener(
    'click',
    () => {
      randCalc('init');
    },
    false,
  );
  document
    .querySelector('#hit-stand')
    .addEventListener('click', hitstand.eval, false);
  //for reseting bet value
  document.querySelector('#reset').addEventListener('click', () => {
    handleEvent('reset');
  });
  //for playing again without removing the complete state of the game
  document.querySelector('#next-game').addEventListener('click', () => {
    handleEvent('next');
  });
})();
