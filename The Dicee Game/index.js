// change img1 randomly according to the numbers
var randomNumber1 = Math.floor(Math.random() * 6) + 1
var imageSource1 = "images/dice" + randomNumber1 + ".png";
$(".img1").attr('src', imageSource1);
// document.querySelector(".img1").setAttribute('src',imageSource1);



// change img2 randomly according to the numbers
var randomNumber2 = Math.floor(Math.random() * 6) + 1
var imageSource2 = "images/dice" + randomNumber2 + ".png";
$(".img2").attr('src', imageSource2);
// document.querySelector(".img2").setAttribute('src', imageSource2);



// reflect the results to h1
if(randomNumber1 > randomNumber2){
    $("h1").text("🚩 Player1 Wins!");
    // document.querySelector('h1').innerHTML = "🚩 Player1 Wins!"
}
else if(randomNumber1 < randomNumber2){
    $("h1").text("Player2 Wins! 🚩");
    // document.querySelector('h1').innerHTML = "Player2 Wins! 🚩"
}
else{
    $("h1").text("Draw!");
    // document.querySelector('h1').innerHTML = "Draw!"
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