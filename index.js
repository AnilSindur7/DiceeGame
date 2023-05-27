let randomNumber1 = Math.floor(Math.random()*6) + 1;

let randomImage1 = "images/dice" + randomNumber1 + ".png";

document.querySelectorAll("img")[0].setAttribute('src',randomImage1);

let randomNumber2 = Math.floor(Math.random()*6) + 1;

let randomImage2 = "images/dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute('src', randomImage2);

if(randomImage1>randomImage2){
    document.querySelector("h1").innerHTML = "🚩 Player 1 Wins";

}else if(randomImage2>randomImage1){
  
     document.querySelector("h1").innerHTML =  "🚩 Player 2 Wins";
}else{

    document.querySelector("h1").innerHTML = "Draw!";
}