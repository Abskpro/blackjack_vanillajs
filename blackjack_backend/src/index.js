////******** event listeners******************//////// /////////////////////////////////////////////////////

window.onload = (function() {
    var socket = io();
})(
    // document.querySelectorAll(".btn").addEventListener("click", function(e) {
    //     e.preventDefault();
    // })

    () => {
        document.querySelector(".next").style.visibility = "hidden";
        document.querySelector(".bet").addEventListener(
            "click",
            () => {
                document.getElementById("balance_display").style.visibility = "hidden";
                randCalc(1);
                assignCards(0);
            },
            false
        );
        document.querySelector("#money").addEventListener("click", bet, false);
        document.querySelector("#hit-stand").addEventListener("click", hitstand.eval, false);
        document.querySelector(".reset").addEventListener("click", reset, false);
        // document.getElementById("next-game").addEventListener("click", next, false);
    }
)();
