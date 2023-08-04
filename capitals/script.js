var score = 0;
var vie = 4;

function jeu(){
    i = Math.floor(Math.random() * pays.length);
    document.querySelector(".answer").innerHTML = "Quelle est la capitale de " + pays[i] + " ?";
    document.querySelector(".answer").style.backgroundColor = "transparent";
    document.querySelector(".buttoncontainer").style.display = "none";
    document.querySelector(".reponse").style.display = "flex";
    document.querySelector(".reponse").style.flexDirection = "column";
    document.querySelector(".reponse").innerHTML = "<input type='text' id='reponse' placeholder='Réponse' autofocus><br><button onclick='checkans()' class='learn-more' id='valid'><span class='circle' aria-hidden='true'><span class='icon arrow'></span></span><span class='button-text'>Valider</span></button>";
    document.getElementById("reponse").focus();
}

function checkans(){
    let capitale = document.getElementById("reponse").value;
    //on veut vérifier si la capitale est bonne, mais sans tenir compte de la casse

    if (capitale == null) {
        document.querySelector(".answer").innerHTML = "Vous avez abandonné !";
        document.querySelector(".buttoncontainer").innerHTML = "<button onclick='location.reload()' class='learn-more'><span class='circle' aria-hidden='true'><span class='icon arrow'></span></span><span class='button-text'>Rejouer</span></button>";
        return;
    } else
    if (capitale == capitales[i] || capitale.toLowerCase() == capitales[i].toLowerCase() || capitale.toUpperCase() == capitales[i].toUpperCase() || (capitale == "andorre la vieille" && capitales[i] == "Andorre-la-Vieille")) {
        score++;
        document.querySelector(".answer").innerHTML = "Bonne réponse !";
        document.querySelector(".answer").style.backgroundColor = "#00ff00";
        var x = setTimeout(jeu, 1000);
    } else {
        vie--;
        document.querySelector(".answer").innerHTML = "La bonne réponse était " + capitales[i];
        document.querySelector(".answer").style.backgroundColor = "#ff0000";
        var x = setTimeout(jeu, 2000);
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
        document.querySelector(".reponse").innerHTML = "<button onclick='location.reload()' class='learn-more'><span class='circle' aria-hidden='true'><span class='icon arrow'></span></span><span class='button-text'>Rejouer</span></button>";
        clearTimeout(x);
        return;
    }
    if (pays.length < 1) {
        document.querySelector(".answer").innerHTML = "Vous avez Gagné !";
        document.querySelector(".answer").style.backgroundColor = "#FFD700";
        document.querySelector(".reponse").innerHTML = "<button onclick='location.reload()' class='learn-more'><span class='circle' aria-hidden='true'><span class='icon arrow'></span></span><span class='button-text'>Rejouer</span></button>";
        document.body.style.backgroundImage = "url('assets/pictures/rickroll.webp')";
        pays.length = 0;
        clearTimeout(x);
        return;
    }

    //On veut remettre le focus sur l'input
    document.querySelector(".reponse").innerHTML = "<input type='text' id='reponse' placeholder='Réponse' autofocus><br><button onclick='checkans()' class='learn-more' id='valid'><span class='circle' aria-hidden='true'><span class='icon arrow'></span></span><span class='button-text'>Valider</span></button>";
    document.getElementById("reponse").focus();
    document.getElementById("reponse").select();
    document.getElementById("reponse").value = "";
}



document;addEventListener("keydown", function (e) {
    if (e.key == "Enter" && pays.length > 0 && vie > 0) {
        checkans();
    }
});

function afficheVie(){
    document.querySelector(".vie").innerHTML = "<img src='assets/pictures/heart-"+vie+".png' alt='vie : "+vie+"' >";
}