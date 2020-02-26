function Card_Process(curr){
    this.curr = curr;
    this.image = document.createElement("IMG");
    this.curr_toInt = parseInt(curr);
    this.card = (this.curr_toInt*10)+ RandnumStorage.initRand[this.curr_toInt];
    this.img = `./src/assets/PNG/${this.card}.png`;

    this.user_rand_Hit = function(){
        this.image.setAttribute("src",this.img);
        domEvents.playerCard.appendChild(this.image);
    };
    this.dealer_rand_Hit = function(){
        this.image.setAttribute("src",this.img);
        domEvents.dealerCard.appendChild(this.image);
    };
}

// Card_Process.prototype.user_button_Hit = function(){

// }


var displayCards = {
    init:() =>{
        console.log("displaycard reached");
       RandnumStorage.userHit.map((curr)=>{
            var player  = new Card_Process(curr);
            player.user_rand_Hit();
        });

        RandnumStorage.dealerHit.map((curr)=>{
            var dealer = new Card_Process(curr);
            dealer.dealer_rand_Hit();
        });
    },

    player:()=>{
                console.log("hit is pressed");
   console.log(RandnumStorage.userHit,RandnumStorage.dealerHit);
                let user_len = RandnumStorage.userHit.length;
                let image = document.createElement("IMG");
                let curr_toInt = RandnumStorage.userHit[user_len-1];
                let card = (curr_toInt*10)+ RandnumStorage.initRand[curr_toInt];
        let img = `./src/assets/PNG/${card}.png`;
                image.setAttribute("src",img);
                domEvents.playerCard.appendChild(image);
    },
    dealer:()=>{
            console.log("stand is pressed");
            let dealer_len = RandnumStorage.dealerHit.length;
            let image = document.createElement("IMG");
            let curr_toInt = RandnumStorage.dealerHit[dealer_len-1];
            let card = (curr_toInt*10)+ RandnumStorage.initRand[curr_toInt];
        let img = `./src/assets/PNG/${card}.png`;
            image.setAttribute("src",img);
            domEvents.dealerCard.appendChild(image);
    }

};

function bet(e){
   var chip_Val = parseInt(e.target.value);
   console.log(typeof chip_Val);
    RandnumStorage.bet_value = chip_Val + RandnumStorage.bet_value;
    RandnumStorage.playerBalance = RandnumStorage.playerBalance - chip_Val;
    document.getElementById("balance").innerHTML = RandnumStorage.playerBalance;
   document.getElementById("bet-value").innerText= RandnumStorage.bet_value;
   e.stopPropagation;
 };


function reset(){
    console.log("reset");
}

function next(){
    console.log("fasd");
    RandnumStorage.dealerHit=[];
    RandnumStorage.userHit=[];
    RandnumStorage.dealerHit.length=0;
    RandnumStorage.userHit.length=0;
    RandnumStorage.currRnd= [];
}

