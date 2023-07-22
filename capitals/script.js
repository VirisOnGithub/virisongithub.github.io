var score = 0;
var vie = 4;

function jeu(){
    let i = Math.floor(Math.random() * pays.length);
    let capitale = prompt("Quelle est la capitale de ce pays : " + pays[i] + " ?");

    //on veut vérifier si la capitale est bonne, mais sans tenir compte de la casse

    if (capitale == null) {
        document.querySelector(".answer").innerHTML = "Vous avez abandonné !";
        document.querySelector(".buttoncontainer").innerHTML = "<button onclick='location.reload()' class='learn-more'><span class='circle' aria-hidden='true'><span class='icon arrow'></span></span><span class='button-text'>Rejouer</span></button>";
    } else
    if (capitale == capitales[i] || capitale.toLowerCase() == capitales[i].toLowerCase() || capitale.toUpperCase() == capitales[i].toUpperCase() || (capitale == "andorre la vieille" && capitales[i] == "Andorre-la-Vieille")) {
        score++;
        document.querySelector(".answer").innerHTML = "Bonne réponse !";
        document.querySelector(".answer").style.backgroundColor = "#00ff00";
    } else {
        vie--;
        document.querySelector(".answer").innerHTML = "La bonne réponse était " + capitales[i];
        document.querySelector(".answer").style.backgroundColor = "#ff0000";
    }
    //on veut enlever le pays et la capitale de la liste
    pays.splice(i, 1);
    capitales.splice(i, 1);

    document.querySelector(".score").innerHTML = "Score : " + score;
    if (pays.length < 2){
        document.querySelector(".nbPays").innerHTML = "Pays restant : 1";
    }
    else{
        document.querySelector(".nbPays").innerHTML = "Pays restants : " + pays.length;
    }
    afficheVie();

    if (vie < 1) {
        document.querySelector(".answer").innerHTML = "Vous avez perdu !";
        document.querySelector(".buttoncontainer").innerHTML = "<button onclick='location.reload()' class='learn-more'><span class='circle' aria-hidden='true'><span class='icon arrow'></span></span><span class='button-text'>Rejouer</span></button>";
    }
    if (pays.length < 1) {
        document.querySelector(".answer").innerHTML = "Vous avez Gagné !";
        document.querySelector(".answer").style.backgroundColor = "#FFD700";
        document.querySelector(".buttoncontainer").innerHTML = "<button onclick='location.reload()' class='learn-more'><span class='circle' aria-hidden='true'><span class='icon arrow'></span></span><span class='button-text'>Rejouer</span></button>";
        document.body.style.backgroundImage = "url('assets/pictures/rickroll.webp')";
        pays.length = 0;
    }
}

document;addEventListener("keydown", function (e) {
    if (e.key == "Enter" && pays.length > 0 && vie > 0 && capitale == null) {
        jeu();
    }
});

function afficheVie(){
    document.querySelector(".vie").innerHTML = "<img src='assets/pictures/heart-"+vie+".png' alt='vie : "+vie+"' >";
}