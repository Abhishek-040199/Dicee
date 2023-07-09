let player1Name=prompt("Enter Player 1 Name :");
let player2Name=prompt("Enter Player 2 Name :");

let player1=document.querySelectorAll("h3")[0];
let player2=document.querySelectorAll("h3")[1];
player1.innerHTML=player1Name;
player2.innerHTML=player2Name;
function refresh(){
    let randomNumber1=Math.floor(Math.random()*6)+1;

    let randomNumber2=Math.floor(Math.random()*6)+1;

    let imageString1="dice"+randomNumber1+".png";
    let imageString2="dice"+randomNumber2+".png";

    let img1=document.querySelectorAll("img")[0];
    let img2=document.querySelectorAll("img")[1];

    img1.setAttribute("src",imageString1);
    img2.setAttribute("src",imageString2);

    let h1=document.querySelector("h1");
    if(randomNumber1>randomNumber2){
        h1.innerHTML=player1Name+" Wins!!";
    }
    else if(randomNumber1<randomNumber2){
        h1.innerHTML=player2Name+" Wins!!";
    }
    else{
        h1.innerHTML="Tie!"
    }
}