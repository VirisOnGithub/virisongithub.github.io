var score = 0;
var vie = 4;

var pays = ["Albanie", "Allemagne", "Andorre", "Arménie", "Autriche", "Azerbaïdjan", "Belgique", "Biélorussie", "Bosnie-Herzégovine", "Bulgarie", "Chypre", "Croatie", "Danemark", "Espagne", "Estonie", "Finlande", "France", "Géorgie", "Grèce", "Hongrie", "Irlande", "Islande", "Italie", "Kosovo", "Lettonie", "Liechtenstein", "Lituanie", "Luxembourg", "Macédoine du Nord", "Malte", "Moldavie", "Monaco", "Monténégro", "Norvège", "Pays-Bas", "Pologne", "Portugal", "République tchèque", "Roumanie", "Royaume-Uni", "Russie", "Saint-Marin", "Serbie", "Slovaquie", "Slovénie", "Suède", "Suisse", "Turquie", "Ukraine", "Vatican"];
var capitales = ["Tirana", "Berlin", "Andorre-la-Vieille", "Erevan", "Vienne", "Bakou", "Bruxelles", "Minsk", "Sarajevo", "Sofia", "Nicosie", "Zagreb", "Copenhague", "Madrid", "Tallinn", "Helsinki", "Paris", "Tbilissi", "Athènes", "Budapest", "Dublin", "Reykjavik", "Rome", "Pristina", "Riga", "Vaduz", "Vilnius", "Luxembourg", "Skopje", "La Valette", "Chisinau", "Monaco", "Podgorica", "Oslo", "Amsterdam", "Varsovie", "Lisbonne", "Prague", "Bucarest", "Londres", "Moscou", "Saint-Marin", "Belgrade", "Bratislava", "Ljubljana", "Stockholm", "Berne", "Ankara", "Kiev", "Vatican"];

function jeu(){
    var i = Math.floor(Math.random() * pays.length);
    var capitale = prompt("Quelle est la capitale de ce pays : " + pays[i] + " ?");

    if (capitale == capitales[i]) {
        score++;
        document.querySelector(".answer").innerHTML = "Bonne réponse !";
        document.querySelector(".answer").style.backgroundColor = "#00ff00";
    } else {
        vie--;
        document.querySelector(".answer").innerHTML = "La bonne réponse était " + capitales[i];
        document.querySelector(".answer").style.backgroundColor = "#ff0000";
    }
    document.querySelector(".score").innerHTML = "Score : " + score;
    afficheVie();

    if (vie < 1) {
        document.querySelector(".answer").innerHTML = "Vous avez perdu !";
        document.querySelector(".buttoncontainer").innerHTML = "<button onclick='location.reload()' class='learn-more'><span class='circle' aria-hidden='true'><span class='icon arrow'></span></span><span class='button-text'>Rejouer</span></button>";
    }
}

function afficheVie(){
    document.querySelector(".vie").innerHTML = "<img src='assets/pictures/heart-"+vie+".png' alt='vie "+vie+"' >";
}