class Init_Card_Process {
    constructor(curr_toInt) {
        this.image = document.createElement("IMG");
        this.curr_toInt = curr_toInt;
        this.card = this.curr_toInt * 10 + RandnumStorage.initRand[this.curr_toInt];
        this.img = `./src/assets/PNG/${this.card}.png`;
    }

    UserHit() {
        this.image.setAttribute("src", this.img);
        domEvents.playerCard.appendChild(this.image);
    }

    DealerHit() {
        this.image.setAttribute("src", this.img);
        domEvents.dealerCard.appendChild(this.image);
    }
}

class Game_Card_Process extends Init_Card_Process {
    constructor(curr_toInt) {
        super(curr_toInt);
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
        console.log("displaycard reached");
        RandnumStorage.userHit.map(curr => {
            let curr_toInt = parseInt(curr);
            var player = new Init_Card_Process(curr_toInt);
            player.UserHit();
        });

        RandnumStorage.dealerHit.map(curr => {
            let curr_toInt = parseInt(curr);
            var dealer = new Init_Card_Process(curr_toInt);
            dealer.DealerHit();
        });
    },

    player: () => {
        console.log("hit is pressed");
        console.log(RandnumStorage.userHit, RandnumStorage.dealerHit);
        let user_len = RandnumStorage.userHit.length;
        let curr_toInt = RandnumStorage.userHit[user_len - 1];
        let player_game_hit = new Game_Card_Process(curr_toInt);
        player_game_hit.BeginUserHit();
    },
    dealer: () => {
        console.log("stand is pressed");
        let dealer_len = RandnumStorage.dealerHit.length;
        let curr_toInt = RandnumStorage.dealerHit[dealer_len - 1];
        let dealer_game_hit = new Game_Card_Process(curr_toInt);
        dealer_game_hit.BeginDealerHit();
    }
};

function bet(e) {
    var chip_Val = parseInt(e.target.value);
    console.log(typeof chip_Val);
    RandnumStorage.bet_value = chip_Val + RandnumStorage.bet_value;
    RandnumStorage.playerBalance = RandnumStorage.playerBalance - chip_Val;
    document.getElementById("balance").innerHTML = RandnumStorage.playerBalance;
    document.getElementById("bet-value").innerText = RandnumStorage.bet_value;
    e.stopPropagation;
}

function reset() {
    console.log("reset");
}

function next() {
    console.log("fasd");
    RandnumStorage.dealerHit = [];
    RandnumStorage.userHit = [];
    RandnumStorage.dealerHit.length = 0;
    RandnumStorage.userHit.length = 0;
    RandnumStorage.currRnd = [];
}

// function Card_Process(curr) {
//     this.curr = curr;
//     this.image = document.createElement("IMG");
//     this.curr_toInt = parseInt(curr);
//     this.card = this.curr_toInt * 10 + RandnumStorage.initRand[this.curr_toInt];
//     this.img = `./src/assets/PNG/${this.card}.png`;

//     this.userHit = function() {
//         this.image.setAttribute("src", this.img);
//         domEvents.playerCard.appendChild(this.image);
//     };
//     this.dealerHit = function() {
//         this.image.setAttribute("src", this.img);
//         domEvents.dealerCard.appendChild(this.image);
//     };
// }
