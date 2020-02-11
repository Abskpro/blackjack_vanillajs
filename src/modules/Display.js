var displayCards = {
    init:() =>{
        console.log("displaycard reached");
       RandnumStorage.userHit.map((curr)=>{
            let image = document.createElement("IMG");
            let curr_toInt = parseInt(curr);
            let card = (curr_toInt*10)+ RandnumStorage.initRand[curr_toInt];
           let img =`./src/assets/PNG/${card}.png`;
            image.setAttribute("src",img);
            domEvents.playerCard.appendChild(image);
        });

        RandnumStorage.dealerHit.map((curr)=>{
            let image = document.createElement("IMG");
            let curr_toInt = parseInt(curr);
            let card = (curr_toInt*10)+ RandnumStorage.initRand[curr_toInt];
            let img = `./src/assets/PNG/${card}.png`;
            image.setAttribute("src",img);
            domEvents.dealerCard.appendChild(image);
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
   domEvents.bet_value.innerHTML = parseInt(domEvents.bet_value.innerHTML) + chip_Val;
    domEvents.balance.innerHTML = domEvents.balance.innerHTML - domEvents.bet_value.innerHTML;
   e.stopPropagation;
 };


function reset(){
    console.log("reset");
}

function next(){

}

