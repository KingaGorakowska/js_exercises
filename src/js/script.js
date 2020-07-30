(function ($) {
    'use strict';

    $(document).ready(function() {

        $('a[href^="#"]').on('click', function (e) {
            e.preventDefault(); // prevent hard jump, the default behavior
            var target = $(this).attr("href"); // Set the target as variable
            var offset = $(target).offset().top - 60;
            $('html, body').animate({
                scrollTop: offset
            }, 1000);
            location.hash = target;
        });
        
    });


})(jQuery);



document.addEventListener("DOMContentLoaded", function () {
    let bodyElement = document.querySelector("body");
    bodyElement.style.fontFamily ="'Oswald', sans-serif";

    let headerElement = document.querySelector(".navbar");
    headerElement.style.backgroundColor ="#717171";

    let titleElement = document.querySelector("h1");
    titleElement.innerText = "Exercises - games with javascript";
    titleElement.style.color ="#717171";
    titleElement.style.fontWeight = "300";
    titleElement.style.padding = "25px 0";
    titleElement.style.textAlign = "center";
    
    let subTitleElement = document.querySelector("h2");
    subTitleElement.style.fontWeight = "300";

// ------ start Noughts crosses game - 1 ------
    let btnStart1 = document.querySelector(".btn-game-1");
    btnStart1.style.color ="#ffffff";
    btnStart1.innerText = "Click here to start";

    btnStart1.addEventListener("click", function() {

        const game = [
            [null, null, null],
            [null, null, null],
            [null, null, null]
        ];
        let _1 = document.querySelector('._1');
        let _2 = document.querySelector('._2');
        let _3 = document.querySelector('._3');

        function move(last) {
            let moveX = prompt("Player X, please enter coordinates (00, 11, 22)");
            let xx = parseInt(moveX[0]);
            let yx = parseInt(moveX[1]);
            game[xx][yx] = 'X';
            if (last) return;
            let moveY = prompt("Player Y, please enter coordinates (00, 11, 22)");
            let xy = parseInt(moveY[0]);
            let yy = parseInt(moveY[1]);

            game[xy][yy] = 'O'
        }
        for (let i = 0; i < 5; i++) {
            let last = i === 5;
            move(last);
            _1.innerHTML = (game[0].toString());
            _2.innerHTML = (game[1].toString());
            _3.innerHTML = (game[2].toString());
        }
        alert('Finished!');
    });

    // ------ start Take a guess word game - 2 ------
    let btnStart2 = document.querySelector(".btn-game-2");
    btnStart2.style.color ="#ffffff";
    btnStart2.innerText = "Click here to start";

    btnStart2.addEventListener("click", function() {
        let word = "";
        let guesswork = new Set();
        let maxGuesswork = 5;
        word = prompt("Please write word");
        let guess1 = document.querySelector(".content-result-game-2");

        while(true){
            
            let finished = true;
            for(let j = 0; j < word.length ; j++){
                if(guesswork.has(word[j])){
                    guess1.innerText += word[j];
                }else {
                    guess1.innerText += "-";
                    finished = false;
                }
            }
            if(finished === true){
                alert("You Win! The answer was: " + word);
                break;
            }

            guess1.innerHTML += "<br/>";
            let ventures = prompt("Guess a letter, or click Cancel to stop playing.");
            guesswork.add(ventures);


			if(guesswork.size === maxGuesswork){
				alert("Sorry, you ran out of guesses. The answer was: " + word);
				break;
			}

        }
    });

});