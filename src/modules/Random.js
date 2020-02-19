function randCalc(num){
   let reps = 4;
   let count = 0;
   function CalculateRand(num) {
     let gen_rand = Math.floor(Math.random() * 13) + 1;
     if (RandnumStorage.initRand[gen_rand] > 4) {
       console.log(`value is at limit ${gen_rand}`);
       reps = reps + 1;
     } else {
       RandnumStorage.initRand[gen_rand] =
         RandnumStorage.initRand[gen_rand] + 1;
       num === 0
         ? (RandnumStorage.userHit.push(gen_rand),
           console.log(RandnumStorage.userHit))
         : num === 1
         ? (RandnumStorage.currRnd.push(gen_rand),
           console.log(RandnumStorage.currRnd))
         : (RandnumStorage.dealerHit.push(gen_rand),
           console.log(RandnumStorage.dealerHit));
     }
   }

   //call the random number generating function based on condition

    var promise = new Promise((resolve,reject)=>{
        if (num === 0) {
            resolve(CalculateRand(0));
       } else if (num === 1) {
         for (let i = 0; i < reps; i++) {
           resolve(CalculateRand(1));
         }
       } else {
            resolve(CalculateRand(2));
       }
    });

   ///********for generation of four random numbers ********////

    promise.then(function(){
            if (functionState.cardDist != true) {
             for (let i = 0; i < RandnumStorage.currRnd.length; i++) {
               functionState.count < 2
                 ? ((functionState.count = functionState.count + 1),
                   RandnumStorage.userHit.push(RandnumStorage.currRnd[i]),
                   console.log(RandnumStorage.userHit))
                 : ((functionState.count = functionState.count + 1),
                   RandnumStorage.dealerHit.push(RandnumStorage.currRnd[i]),
                   console.log(RandnumStorage.dealerHit));
             }
             functionState.cardDist = true;
           } else {
             console.log("not executed");
           }
    }).then(()=>{
            console.log("yay! promise is fullfilled");
            functionState.DisplayState === "init" ? displayCards.init()
            : functionState.DisplayState === "player" ? displayCards.player()
            : displayCards.dealer();
        });
};



function assignCards(toggle){
      RandnumStorage.userTotalCardValue = (RandnumStorage.userHit).reduce(sumFunc,0);
      RandnumStorage.dealerTotalCardValue = RandnumStorage.dealerHit.reduce(sumFunc,0);

    function sumFunc(total, num) {
      return total + num;
    }
    console.log(
      RandnumStorage.userTotalCardValue,
      RandnumStorage.dealerTotalCardValue
    );
};

