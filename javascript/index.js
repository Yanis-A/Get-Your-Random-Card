let cartes      = [],
    couleurs    = ["H","C","D","S"];

for(let j = 0; j < couleurs.length; j++){
    for(let i = 1; i != 14 ; i = i+ 1){
        cartes.push( {
            couleur : couleurs[j],
            valeur  : i
        });
    }
}

let result = new Array(52);
result.fill(0);
for(let i = 0; i < 10000000; i++){
    let des = Math.floor(Math.random()*52);
    //console.log(cartes[des]);
    result[des]++;
}

let canvas = document.getElementsByTagName("canvas")[0];
let context = canvas.getContext("2d");
let img = new Image();

let randomCard = cartes[Math.floor(Math.random()*52)]
let x = randomCard.valeur;
let y = randomCard.couleur;

let chemin = "img/"+x+y+".png";

img.src = chemin;
console.log(img);

img.onload = function(){
    context.drawImage(img,10,10);
}
