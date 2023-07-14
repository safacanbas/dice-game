let randomNumber1 = (Math.floor(Math.random() * 6)) + 1;

if(randomNumber1 === 1) {
    let image1 = document.querySelector(".img1");
    image1.src = "images/dice1.png";
}
else if(randomNumber1 ===2) {
    let image2 = document.querySelector(".img1");
    image2.src = "images/dice2.png";
}
else if(randomNumber1 ===3) {
    let image3 = document.querySelector(".img1");
    image3.src = "images/dice3.png";
}
else if(randomNumber1 ===4) {
    let image4 = document.querySelector(".img1");
    image4.src = "images/dice4.png";
}
else if(randomNumber1 ===5) {
    let image5 = document.querySelector(".img1");
    image5.src = "images/dice5.png";
}
else if(randomNumber1 ===6) {
    let image6 = document.querySelector(".img1");
    image6.src = "images/dice6.png";
}

let randomNumber2 = (Math.floor(Math.random() * 6)) + 1;

if(randomNumber2 === 1) {
    let image1 = document.querySelector(".img2");
    image1.src = "images/dice1.png";
}
else if(randomNumber2 ===2) {
    let image2 = document.querySelector(".img2");
    image2.src = "images/dice2.png";
}
else if(randomNumber2 ===3) {
    let image3 = document.querySelector(".img2");
    image3.src = "images/dice3.png";
}
else if(randomNumber2 ===4) {
    let image4 = document.querySelector(".img2");
    image4.src = "images/dice4.png";
}
else if(randomNumber2 ===5) {
    let image5 = document.querySelector(".img2");
    image5.src = "images/dice5.png";
}
else if(randomNumber2 ===6) {
    let image6 = document.querySelector(".img2");
    image6.src = "images/dice6.png";
}

if(randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 1 Wins";
}
else if(randomNumber1 === randomNumber2) {
    document.querySelector("h1").innerHTML = "Draw";
}
else {
    document.querySelector("h1").innerHTML = "Player 2 Wins";
}