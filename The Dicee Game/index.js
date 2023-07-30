// change img1 randomly according to the numbers
var randomNumber1 = Math.floor(Math.random() * 6) + 1
var imageSource1 = "images/dice" + randomNumber1 + ".png";
document.querySelector(".img1").setAttribute('src',imageSource1);



// change img2 randomly according to the numbers
var randomNumber2 = Math.floor(Math.random() * 6) + 1
var imageSource2 = "images/dice" + randomNumber2 + ".png";
document.querySelector(".img2").setAttribute('src', imageSource2);



// reflect the results to h1
if(randomNumber1 > randomNumber2){
    document.querySelector('h1').innerHTML = "🚩 Player1 Wins!"
}
else if(randomNumber1 < randomNumber2){
    document.querySelector('h1').innerHTML = "Player2 Wins! 🚩"
}
else{
    document.querySelector('h1').innerHTML = "Draw!"
}




// if(randomNumber1 == 1){
//     imageElement1.setAttribute('src', 'images/dice1.png');
// }
// else if(randomNumber1 == 2){
//     imageElement1.setAttribute('src', 'images/dice2.png');
// }
// else if(randomNumber1 == 3){
//     imageElement1.setAttribute('src', 'images/dice3.png');
// }
// else if(randomNumber1 == 4){
//     imageElement1.setAttribute('src', 'images/dice4.png');
// }
// else if(randomNumber1 == 5){
//     imageElement1.setAttribute('src', 'images/dice5.png');
// }

// if(randomNumber2 == 1){
//     imageElement2.setAttribute('src', 'images/dice1.png');
// }
// else if(randomNumber2 == 2){
//     imageElement2.setAttribute('src', 'images/dice2.png');
// }
// else if(randomNumber2 == 3){
//     imageElement2.setAttribute('src', 'images/dice3.png');
// }
// else if(randomNumber2 == 4){
//     imageElement2.setAttribute('src', 'images/dice4.png');
// }
// else if(randomNumber2 == 5){
//     imageElement2.setAttribute('src', 'images/dice5.png');
// }